import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cog, Droplets, HardHat, Shield } from 'lucide-react';
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
    title: "Engineering & Design Solutions",
    description: "Comprehensive engineering services for industrial and commercial applications — from concept to completion.",
    details: [
      "• Mechanical Engineering",
      "• Electrical Engineering",
      "• Civil Engineering",
      "• Equipment Design & Installation",
      "• Power Systems & Control Panels"
    ]
  },
  {
    id: 2,
    icon: Droplets,
    title: "Water & Process Solutions",
    description: "Advanced water treatment and smart automation systems tailored to your industry's efficiency and sustainability needs.",
    details: [
      "• RO Systems & UV Treatment",
      "• Industrial Filtration",
      "• Process Automation (SCADA, PLC, Process Control)",
      "• Waste Management"
    ]
  },
  {
    id: 3,
    icon: HardHat,
    title: "Mining & Industrial Support",
    description: "Specialized support for mining operations and large-scale industrial activities with a focus on safety, compliance, and reliability.",
    details: [
      "• Mine Planning",
      "• Equipment Supply",
      "• Infrastructure & Safety Systems",
      "• Project Coordination"
    ]
  },
  {
    id: 4,
    icon: Shield,
    title: "Operations, Safety & Workforce",
    description: "End-to-end support for smooth industrial operations, from safety programs to skilled labor and supply chain management.",
    details: [
      "• Workplace Safety & Risk Assessment",
      "• Safety Training & Compliance",
      "• Skilled Labor Provision",
      "• Supply Chain & Logistics"
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
            Our Engineering Services
          </h2>
          <p className="text-xl text-platchem-gray max-w-3xl mx-auto leading-relaxed">
            Comprehensive industrial solutions delivered by certified professionals 
            with deep expertise across multiple engineering disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                  <ul className="text-sm text-platchem-gray space-y-1 mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-platchem-lime rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <Button 
                    onClick={() => navigate('/services')}
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
