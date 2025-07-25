import React from 'react';
import { Drill, HardHat, Shield, Hammer, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';

interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const MiningDetail: React.FC = () => {
  // Group services in pairs for the 2x2 grid
  const serviceGroups: ServiceCard[][] = [
    // First row
    [
      {
        title: 'Drilling Equipment Supply',
        description: 'We source and supply high-quality, industry-standard drilling equipment, ensuring compatibility with client needs. Our logistics team manages timely delivery and ongoing technical support to keep operations running without interruption.',
        icon: <Drill className="w-8 h-8 text-platchem-lime" />
      },
      {
        title: 'Underground Support Services',
        description: 'Our experienced teams install and maintain ground support systems, including rock bolts, mesh, and shotcrete, using proven methods to stabilize tunnels and shafts, improving safety and longevity.',
        icon: <HardHat className="w-8 h-8 text-platchem-lime" />
      }
    ],
    // Second row
    [
      {
        title: 'Shotcreting & Fibrecreting',
        description: 'We apply advanced concrete reinforcement techniques on-site using specialized machinery and skilled operators, delivering durable linings that strengthen underground structures against wear and environmental stresses.',
        icon: <Shield className="w-8 h-8 text-platchem-lime" />
      },
      {
        title: 'Drilling & Blasting',
        description: 'Our certified blasting professionals design and execute precise drilling and blasting plans that maximize resource recovery while adhering strictly to safety protocols and minimizing operational impact.',
        icon: <Hammer className="w-8 h-8 text-platchem-lime" />
      }
    ]
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const row: Variants = {
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
            Mining Support Solutions
          </h1>
          <p className="text-xl text-platchem-gray max-w-3xl mx-auto">
            Comprehensive mining support delivered with safety, precision, and efficiency — from equipment supply to skilled manpower — tailored for both underground and surface operations.
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
              Secondary Development & Skilled Labor
            </h2>
            <p className="text-platchem-gray max-w-3xl mx-auto mb-6">
              We support mine expansion projects by carefully planning and executing tunnel enlargements, ventilation improvements, and access road construction, ensuring smooth integration with existing workings. We provide vetted, trained mining professionals tailored to project scale and complexity, with flexible workforce solutions that include ongoing safety training.
            </p>
            <div className="flex items-center justify-center gap-2 text-platchem-lime font-medium">
              <span>Learn more about our services</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiningDetail;
