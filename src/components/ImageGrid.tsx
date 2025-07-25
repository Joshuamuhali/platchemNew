import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';

interface GridItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ImageGrid = () => {
  // Array of 16 items for 4x4 grid
  const items: GridItem[] = Array(16).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Project ${index + 1}`,
    description: 'Project description goes here',
    imageUrl: `https://picsum.photos/seed/${index + 100}/800/600` // Random placeholder images
  }));

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: (custom: number) => ({
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.05
      }
    })
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-platchem-navy sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-xl text-platchem-gray max-w-3xl mx-auto">
            Explore our portfolio of successful projects and case studies
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {items.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariant}
              custom={items.indexOf(item) % 4} // Stagger animation in rows
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="relative pt-[75%] overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-platchem-navy">{item.title}</h3>
                  <p className="text-sm text-platchem-gray mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <button className="bg-platchem-lime hover:bg-platchem-navy text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
