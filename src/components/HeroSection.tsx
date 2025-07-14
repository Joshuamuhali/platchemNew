
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(12, 21, 39, 0.7), rgba(12, 21, 39, 0.5)), url("/lovable-uploads/41dffd9a-089c-408e-8be6-f0f447fdd3de.png")',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight font-inter">
            <span className="block">Engineering</span>
            <span className="text-platchem-lime block animate-scale-in" style={{ animationDelay: '0.3s' }}>
              Zambia's Industrial
            </span>
            <span className="block animate-scale-in" style={{ animationDelay: '0.6s' }}>
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
              className="bg-platchem-lime hover:bg-platchem-lime/90 text-white font-semibold px-8 py-4 text-lg group shadow-2xl hover:shadow-platchem-lime/25 transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              onClick={() => (document.querySelector('#contact-form') as HTMLButtonElement)?.click()}
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-platchem-navy font-semibold px-8 py-4 text-lg group shadow-2xl backdrop-blur-sm transition-all duration-300"
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
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center hover:border-platchem-lime transition-colors duration-300">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
