import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wrench, Cpu, HardHat, Users } from 'lucide-react';

const solutions = [
  {
    title: "Plant Maintenance & Rehabilitation",
    icon: <Wrench className="h-8 w-8 text-platchem-lime" />,
    description: "We conduct thorough plant assessments to identify key maintenance needs, then develop customized schedules and intervention plans. Our teams apply best practices and advanced techniques to rehabilitate equipment, minimizing downtime and extending operational life."
  },
  {
    title: "Mechanical Engineering & Projects",
    icon: <Cpu className="h-8 w-8 text-platchem-lime" />,
    description: "From conceptual design to final commissioning, we manage every stage of mechanical engineering projects. Our engineers collaborate closely with clients to ensure solutions are fit-for-purpose, budget-compliant, and delivered on time with strict quality controls."
  },
  {
    title: "Civil & Structural Engineering",
    icon: <HardHat className="h-8 w-8 text-platchem-lime" />,
    description: "Our civil engineers perform detailed site surveys and structural analyses to design safe, compliant infrastructure. We oversee construction phases to ensure foundations, supports, and structures meet all regulatory standards and client expectations."
  },
  {
    title: "Skilled Labor Outsourcing",
    icon: <Users className="h-8 w-8 text-platchem-lime" />,
    description: "Leveraging a vetted network of experienced professionals, we provide flexible labor solutions tailored to project needs. Our workforce undergoes continuous training and safety briefings to maintain high standards and seamless integration with client teams."
  }
];

const EngineeringSolutionsGrid = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-platchem-navy sm:text-4xl mb-4">
            Engineering Solutions
          </h2>
          <p className="text-xl text-platchem-gray">
            Tailored plant maintenance, engineering, and skilled labor outsourcing designed to boost industrial efficiency and reliability through expert project management and hands-on execution.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutions.map((solution, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-platchem-navy/10 rounded-lg">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl text-platchem-navy">
                      {solution.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-platchem-gray">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringSolutionsGrid;
