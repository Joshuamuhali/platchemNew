import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cog, HardHat } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Service {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: Cog,
    title: "Engineering Solutons",
    description: "Tailored plant maintenance, engineering, and skilled labor outsourcing for industrial efficiency and reliability.",
    details: [
      "• Plant Maintenance & Rehabilitation",
      "• Mechanical Engineering & Projects",
      "• Civil & Structural Engineering",
      "• Power & Control Systems",
      "• Skilled Labor Outsourcing"
    ]
  },
  {
    id: 2,
    icon: HardHat,
    title: "Mining Support Solutions",
    description: "Comprehensive mining support from drilling and blasting to manpower solutions for underground and surface operations.",
    details: [
      "• Drilling Equipment Supply",
      "• Underground Support Services",
      "• Shotcreting & Fibrecreting",
      "• Drilling & Blasting",
      "• Secondary Development",
      "• Skilled Labor & Manpower Hire"
    ]
  }
];

export function EngineeringServices() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-platchem-navy mb-6 font-inter">
            Our Core Services
          </h2>
          <p className="text-xl text-platchem-gray max-w-3xl mx-auto leading-relaxed">
            Industrial engineering and mining solutions delivered by certified professionals with deep expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in"
            >
              <CardHeader className="flex flex-col items-center pb-4">
                <div className="w-12 h-12 bg-platchem-lime/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-platchem-lime group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-platchem-lime group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-lg text-platchem-navy group-hover:text-platchem-lime transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <div className="mt-3 mb-3">
                  <CardDescription className="text-platchem-gray mb-3 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="text-sm text-platchem-gray space-y-1 mb-4 list-disc list-inside">
                    {service.details.map((detail, idx) => {
                      // Remove bullet point if it exists (both • and -)
                      const cleanDetail = detail.replace(/^[•-]\s*/, '');
                      return <li key={idx}>{cleanDetail}</li>;
                    })}
                  </ul>
                </div>
                <div className="mt-3">
                  <Button
                    onClick={() => navigate(service.title.toLowerCase().includes('engineering') ? '/services/engineering' : '/services/mining')}
                    variant="outline"
                    size="sm"
                    className="border-platchem-lime text-platchem-lime hover:bg-platchem-lime hover:text-white transition-all duration-300 w-full justify-center"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            onClick={() => navigate('/services')}
            size="lg"
            className="bg-platchem-lime hover:bg-platchem-lime/90 text-white font-semibold px-8 py-4 w-full md:w-auto"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
