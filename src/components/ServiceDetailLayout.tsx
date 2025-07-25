import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceDetailLayoutProps {
  title: string;
  description: string;
  sections: {
    title: string;
    content: string;
    icon?: ReactNode;
  }[];
  images: string[];
  bgColor?: string;
}

export const ServiceDetailLayout: React.FC<ServiceDetailLayoutProps> = ({
  title,
  description,
  sections,
  images,
  bgColor = 'bg-white',
}) => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className={`py-20 px-6 ${bgColor} text-gray-800`}>
      <motion.div 
        className="container mx-auto max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-platchem-navy mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-platchem-gray">
            {description}
          </p>
        </motion.div>

        <motion.div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  {section.icon || (
                    <div className="w-12 h-12 bg-platchem-lime/10 rounded-full flex items-center justify-center mb-4">
                      <div className="w-3 h-3 bg-platchem-lime rounded-full" />
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-platchem-navy mb-3">
                    {section.title}
                  </h2>
                  <p className="text-platchem-gray leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {images.length > 0 && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
            variants={itemVariants}
          >
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={img}
                  alt={`${title} ${idx + 1}`}
                  className="w-full h-64 md:h-80 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x500?text=Service+Image';
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div 
          className="mt-12 text-center"
          variants={itemVariants}
        >
          <Button 
            onClick={() => navigate(-1)}
            className="bg-platchem-lime hover:bg-platchem-navy text-white px-8 py-4 font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            ← Back to Services
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceDetailLayout;
