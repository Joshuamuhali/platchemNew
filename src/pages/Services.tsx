
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EngineeringServices } from '@/components/EngineeringServices';

const Services = () => {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-platchem-navy to-platchem-navy/90 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A5CE3A' fill-opacity='0.4'%3E%3Cpath d='m0 40 40-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="outline"
              className="mb-6 border-white text-white hover:bg-white hover:text-platchem-navy"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-inter animate-fade-in">
              Our <span className="text-platchem-lime">Services</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Comprehensive engineering solutions delivered by certified professionals
            </p>
          </div>
        </div>
      </section>

      <EngineeringServices />
    </div>
  );
};

export default Services;
