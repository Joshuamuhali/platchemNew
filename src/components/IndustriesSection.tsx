
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  Mountain, 
  Factory, 
  Building, 
  Droplets, 
  Cpu, 
  Lightbulb 
} from 'lucide-react';

const IndustriesSection = () => {
  const navigate = useNavigate();

  const industries = [
    {
      icon: Mountain,
      title: "Mining",
      description: "Specialized engineering solutions for underground mining operations, including locomotive supply, dewatering systems, and process automation.",
      projects: "120+ Projects"
    },
    {
      icon: Factory,
      title: "Industrial Plants",
      description: "Turnkey solutions for plant modernization, automation, and safety systems in manufacturing and processing facilities.",
      projects: "75+ Projects"
    },
    {
      icon: Building,
      title: "Civil Infrastructure",
      description: "Design and construction of modern administrative complexes and industrial facilities with sustainable practices.",
      projects: "35+ Projects"
    },
    {
      icon: Droplets,
      title: "Water & Sanitation",
      description: "Expertise in industrial water treatment, dewatering systems, and environmental compliance solutions.",
      projects: "58+ Projects"
    },
    {
      icon: Cpu,
      title: "Manufacturing",
      description: "Process automation, SCADA systems, and quality control solutions for meat processing and other manufacturing operations.",
      projects: "30+ Projects"
    },
    {
      icon: Lightbulb,
      title: "Utilities & Energy",
      description: "Electrical distribution network modernization, motor control systems, and power optimization solutions.",
      projects: "45+ Projects"
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
            Our expertise spans across multiple industries, delivering tailored engineering 
            solutions that meet the unique challenges of each sector.
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
