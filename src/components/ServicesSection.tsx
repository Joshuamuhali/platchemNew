
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Cpu, 
  Wrench, 
  HardHat,
  LayoutGrid,
  Zap,
  MapPin,
  Truck,
  Shield,
  Users
} from 'lucide-react';

const ServicesSection = () => {
  const navigate = useNavigate();

  const serviceCategories = [
    {
      title: "Engineering Solutions",
      description: "Integrated mechanical, electrical, and civil engineering services tailored for industrial applications — from design to implementation.",
      services: [
        "Mechanical & Electrical Engineering",
        "Civil Engineering & Infrastructure",
        "Equipment Design & Installation",
        "Power Systems & Control Panels"
      ],
      icon: Cpu,
      color: "text-blue-600"
    },
    {
      title: "Mining Support Services",
      description: "Reliable, compliant, and safety-focused solutions for mining operations of all sizes.",
      services: [
        "Mine Planning & Project Coordination",
        "Mining Equipment Supply",
        "Safety Systems & Infrastructure",
        "Skilled Labor & Logistics Support"
      ],
      icon: HardHat,
      color: "text-amber-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-platchem-navy mb-6 font-inter">
            Our Core Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {serviceCategories.map((category, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.color.replace('text-', 'bg-')} bg-opacity-10 mr-4`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-platchem-navy">{category.title}</h3>
                </div>
                
                <p className="text-platchem-gray mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className={`h-5 w-5 ${category.color} mt-0.5 mr-2 flex-shrink-0`} />
                      <span className="text-platchem-gray">{service}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => navigate('/services')}
                  variant="outline" 
                  className={`border-${category.color.split('-')[1]}-600 text-${category.color.split('-')[1]}-600 hover:bg-${category.color.split('-')[1]}-50 hover:border-${category.color.split('-')[1]}-700 hover:text-${category.color.split('-')[1]}-700 transition-all duration-300`}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-platchem-gray mb-6 max-w-2xl mx-auto">
            Looking for a comprehensive solution for your industrial or mining needs? Our expert team is ready to assist you.
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="bg-platchem-lime hover:bg-platchem-lime/90 text-white font-semibold px-8 py-4 shadow-lg hover:shadow-platchem-lime/30 transition-all duration-300"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

const CheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default ServicesSection;
