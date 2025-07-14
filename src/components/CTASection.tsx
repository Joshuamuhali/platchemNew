
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SlidingContactForm from '@/components/SlidingContactForm';

const CTASection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    const form = document.querySelector('#contact-form') as HTMLFormElement | null;
    if (form) {
      const slidingForm = document.querySelector('SlidingContactForm') as HTMLFormElement | null;
      if (slidingForm) {
        slidingForm.dispatchEvent(new Event('submit', { bubbles: true }));
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-platchem-lime to-platchem-lime/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-platchem-navy mb-6 font-inter">
            Have a Project in Mind?
          </h2>
          <p className="text-xl lg:text-2xl text-platchem-navy/80 mb-8 leading-relaxed">
            Let's build something extraordinary together. Our team of expert engineers 
            is ready to turn your vision into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="bg-platchem-navy hover:bg-platchem-navy/90 text-white font-semibold px-8 py-4 text-lg group shadow-xl"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => navigate('/quote')}
              size="lg"
              variant="outline"
              className="border-2 border-platchem-navy text-platchem-navy hover:bg-platchem-navy hover:text-white font-semibold px-8 py-4 text-lg shadow-xl"
            >
              Request Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-platchem-navy">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-platchem-navy rounded-full"></div>
              <span className="font-semibold">Free Consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-platchem-navy rounded-full"></div>
              <span className="font-semibold">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
