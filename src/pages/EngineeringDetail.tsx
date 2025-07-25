import React from 'react';
import { Wrench, Cpu, Building2, Zap, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const EngineeringDetail = () => {
  // Group services in pairs for the 2x2 grid
  const serviceGroups = [
    // First row
    [
      {
        title: 'Plant Maintenance & Rehabilitation',
        description: 'We conduct thorough plant assessments to identify key maintenance needs, then develop customized schedules and intervention plans. Our teams apply best practices and advanced techniques to rehabilitate equipment, minimizing downtime and extending operational life.',
        icon: <Wrench className="w-8 h-8 text-platchem-lime" />
      },
      {
        title: 'Mechanical Engineering & Projects',
        description: 'From conceptual design to final commissioning, we manage every stage of mechanical engineering projects. Our engineers collaborate closely with clients to ensure solutions are fit-for-purpose, budget-compliant, and delivered on time with strict quality controls.',
        icon: <Cpu className="w-8 h-8 text-platchem-lime" />
      }
    ],
    // Second row
    [
      {
        title: 'Civil & Structural Engineering',
        description: 'Our civil engineers perform detailed site surveys and structural analyses to design safe, compliant infrastructure. We oversee construction phases to ensure foundations, supports, and structures meet all regulatory standards and client expectations.',
        icon: <Building2 className="w-8 h-8 text-platchem-lime" />
      },
      {
        title: 'Power & Control Systems',
        description: 'We design and install custom power distribution and control systems that optimize energy use and enhance safety. Our approach includes rigorous testing and commissioning, plus ongoing system support to ensure stable and efficient operations.',
        icon: <Zap className="w-8 h-8 text-platchem-lime" />
      }
    ]
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const row = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-platchem-navy mb-4">
            Engineering Solutions
          </h1>
          <p className="text-xl text-platchem-gray max-w-3xl mx-auto">
            Tailored plant maintenance, engineering, and skilled labor outsourcing designed to boost industrial efficiency and reliability through expert project management and hands-on execution.
          </p>
        </div>

        <motion.div 
          className="space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {serviceGroups.map((rowServices, rowIndex) => (
            <motion.div 
              key={rowIndex} 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={row}
            >
              {rowServices.map((service, index) => (
                <motion.div key={`${rowIndex}-${index}`} variants={item}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-platchem-navy/10 rounded-lg">
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl text-platchem-navy">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-platchem-gray">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 border-t border-gray-200 pt-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-platchem-navy mb-6">
              Skilled Labor Outsourcing
            </h2>
            <p className="text-platchem-gray max-w-3xl mx-auto">
              Leveraging a vetted network of experienced professionals, we provide flexible labor solutions tailored to project needs. Our workforce undergoes continuous training and safety briefings to maintain high standards and seamless integration with client teams.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringDetail;