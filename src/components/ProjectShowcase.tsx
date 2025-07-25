
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectShowcase = () => {
  const showcaseItems = [
    {
      image: "/lovable-uploads/team1.png",
      title: "Expert Engineering Team",
      description: "Our certified engineers bring decades of experience to every project, ensuring safety and excellence in execution."
    },
    {
      image: "/lovable-uploads/award.png",
      title: "Award-Winning Excellence",
      description: "Recognized for outstanding contributions to Zambia's industrial development with multiple industry certifications and awards."
    },
    {
      image: "/lovable-uploads/mining.png",
      title: "Mining & Industrial Safety",
      description: "Zero-harm safety protocols with comprehensive training programs for all industrial and mining operations."
    },
    {
      image: "/lovable-uploads/board.jpeg",
      title: "Specialized Projects Team",
      description: "Dedicated project teams with specialized safety equipment and protocols for complex industrial environments."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-platchem-navy mb-6 font-inter">
            Our Team & Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated professionals behind Zambia's most successful industrial engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-platchem-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-platchem-navy mb-3 group-hover:text-platchem-lime transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
