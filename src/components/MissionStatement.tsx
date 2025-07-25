import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Target, Eye, Heart, AlertTriangle } from 'lucide-react';

interface AnimationItem {
  id: 'mission' | 'vision' | 'values';
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

const MissionStatement = () => {
  const [error, setError] = useState<string | null>(null);

  const missionItems: AnimationItem[] = [
    {
      id: 'mission',
      title: 'Our Mission',
      description: 'Delivering smart and dependable mining and engineering solutions, built on quality, safety, and service that consistently exceeds expectations.',
      icon: <Target className="w-12 h-12 text-white" />,
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-500'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      description: 'To be the leading provider of innovative and sustainable mining solutions, setting new standards in safety, efficiency, and environmental responsibility.',
      icon: <Eye className="w-12 h-12 text-white" />,
      bgColor: 'bg-green-500/10',
      iconColor: 'text-green-500'
    },
    {
      id: 'values',
      title: 'Our Values',
      description: 'Integrity, innovation, excellence, and sustainability guide our decisions and actions in everything we do.',
      icon: <Heart className="w-12 h-12 text-white" />,
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-500'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
    hover: { y: -5, transition: { duration: 0.2 } }
  };

  // No loading state needed for static images

  // Render error state with more helpful information
  if (error) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertTriangle className="h-8 w-8 text-red-600" aria-hidden="true" />
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Unable to load content</h3>
        <p className="text-gray-600 mb-6">
          {error} If the problem persists, please try refreshing the page or contact support.
        </p>
        <div className="space-x-3">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-platchem-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Refresh Page
          </button>
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-platchem-green"
          >
            Go to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-platchem-navy relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/lovable-uploads/a2739381-a9b8-49ab-bac2-15eec267bcef.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-platchem-navy to-platchem-navy/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-platchem-lime/80 max-w-3xl mx-auto leading-relaxed">
            Guiding principles that shape our approach to excellence in mining and engineering solutions.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {missionItems.map((item: AnimationItem, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <div className={`h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl flex flex-col`}>
                <div className={`w-20 h-20 rounded-full ${item.bgColor} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <div className={item.iconColor}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-platchem-lime transition-colors duration-300 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed flex-grow text-center">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionStatement;
