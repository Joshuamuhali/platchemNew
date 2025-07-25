import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Mountain, Settings, Truck } from 'lucide-react'; // Updated icons

const IndustriesSection = () => {
  const navigate = useNavigate();

  const industries = [
    {
      icon: Mountain,
      title: "Mining Projects",
      description: "Comprehensive support for underground and open-pit mining operations, including planning, equipment supply, and safety systems.",
      projects: "120+ Projects"
    },
    {
      icon: Settings,
      title: "Engineering Projects",
      description: "Turnkey engineering solutions across mechanical, electrical, and civil disciplines — from plant modernization to infrastructure development.",
      projects: "110+ Projects"
    },
    {
      icon: Truck,
      title: "Engineering Supply",
      description: "Reliable sourcing and delivery of specialized engineering equipment, control systems, and industrial components.",
      projects: "80+ Deliveries"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-platchem-navy mb-6 font-inter">
            Industries We Serve
          </h2>
          <p className="text-xl text-platchem-gray max-w-3xl mx-auto leading-relaxed">
            We specialize in delivering mission-critical solutions across core industrial sectors. 
            Our work is rooted in engineering excellence, project reliability, and long-term operational value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="bg-gradient-to-br from-platchem-navy to-platchem-navy/80 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-platchem-lime/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <industry.icon className="h-12 w-12 text-platchem-lime mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl font-bold mb-2">{industry.title}</CardTitle>
                  <div className="text-platchem-lime font-semibold">{industry.projects}</div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-platchem-gray leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={() => navigate('/case-studies')}
                    className="text-platchem-lime font-semibold hover:underline cursor-pointer"
                  >
                    View Case Studies →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
