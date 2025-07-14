import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import { EngineeringServices } from '@/components/EngineeringServices';
import IndustriesSection from '@/components/IndustriesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectShowcase from '@/components/ProjectShowcase';
import CommitmentsSection from '@/components/CommitmentsSection';
import CTASection from '@/components/CTASection';
import SlidingForm from '../components/SlidingForm';
import SlidingContactForm from '../components/SlidingContactForm';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Platchem Ltd",
      "url": "https://platchemzambia.com",
      "logo": "/lovable-uploads/f8693ab6-eddf-42aa-835c-1192015823ef.png",
      "description": "Leading Zambian engineering company specializing in mining, water treatment, automation, and industrial solutions since 2008.",
      "foundingDate": "2008",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kitwe",
        "addressCountry": "Zambia"
      },
      "telephone": "+260 96 397 5613",
      "email": "info@platchemzambia.com",
      "sameAs": [],
      "serviceArea": {
        "@type": "Country",
        "name": "Zambia"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="font-inter">
      <main>
        <HeroSection />
        <StatsSection />
        
        {/* Hidden Sliding Form Button */}
        <button id="contact-form" className="hidden">
          <SlidingForm
            panels={[
              {
                id: 'contact',
                title: 'Contact Us',
                Component: SlidingContactForm
              }
            ]}
            defaultPanelId="contact"
            isOpen={false}
            onClose={() => {}}
          />
        </button>
        <EngineeringServices />
        <WhyChooseUs />
        <IndustriesSection />
        <ProjectShowcase />
        <CommitmentsSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
