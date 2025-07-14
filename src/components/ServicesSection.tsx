
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Cog, 
  Zap, 
  Droplets, 
  HardHat, 
  Settings, 
  Hammer, 
  Shield, 
  Truck 
} from 'lucide-react';

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Cog,
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical solutions for industrial equipment, maintenance, and optimization.",
      features: ["Equipment Design", "Maintenance", "Installation"]
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      description: "Complete electrical systems design, installation, and maintenance for industrial applications.",
      features: ["Power Systems", "Control Panels", "Automation"]
    },
    {
      icon: Droplets,
      title: "Water Treatment",
      description: "Advanced water treatment solutions including filtration, purification, and waste management.",
      features: ["RO Systems", "UV Treatment", "Industrial Filtration"]
    },
    {
      icon: HardHat,
      title: "Mine Support Services",
      description: "Specialized engineering support for mining operations with focus on safety and efficiency.",
      features: ["Mine Planning", "Equipment Supply", "Safety Systems"]
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Smart automation solutions to optimize industrial processes and improve efficiency.",
      features: ["SCADA Systems", "PLC Programming", "Process Control"]
    },
    {
      icon: Hammer,
      title: "Civil Engineering",
      description: "Structural design and construction services for industrial and commercial projects.",
      features: ["Structural Design", "Project Management", "Construction"]
    },
    {
      icon: Shield,
      title: "Safety Programs",
      description: "Comprehensive safety solutions ensuring zero-harm workplace environments.",
      features: ["Risk Assessment", "Safety Training", "Compliance"]
    },
    {
      icon: Truck,
      title: "Supply Chain & Labor",
      description: "Reliable supply chain management and skilled labor provision for industrial projects.",
      features: ["Equipment Supply", "Skilled Labor", "Project Coordination"]
    }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-platchem-lime/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-platchem-lime group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-platchem-lime group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-platchem-navy group-hover:text-platchem-lime transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-platchem-gray mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="text-sm text-platchem-gray space-y-1 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-platchem-lime rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => navigate('/services')}
                  variant="outline" 
                  size="sm"
                  className="border-platchem-lime text-platchem-lime hover:bg-platchem-lime hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate('/services')}
            size="lg"
            className="bg-platchem-lime hover:bg-platchem-lime/90 text-white font-semibold px-8 py-4"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
