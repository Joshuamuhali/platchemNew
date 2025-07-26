
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const GalleryPage = () => {
  // Project images from /lovable-uploads
  const items = [
    // Chilanga Cement
    {
      id: 1,
      title: 'Chilanga',
      description: 'Cement production facility overview',
      category: 'Cement',
      imageUrl: '/lovable-uploads/chilanga1.jpeg',
      date: '01/01/2023'
    },
    {
      id: 2,
      title: 'Chilanga',
      description: 'Cement production line maintenance',
      category: 'Cement',
      imageUrl: '/lovable-uploads/chilanga2.jpeg',
      date: '02/02/2023'
    },
    {
      id: 3,
      title: 'Chilanga',
      description: 'Plant infrastructure and systems',
      category: 'Cement',
      imageUrl: '/lovable-uploads/chilanga3.jpeg',
      date: '03/03/2023'
    },
    {
      id: 4,
      title: 'Chilanga',
      description: 'Aerial view of operations',
      category: 'Cement',
      imageUrl: '/lovable-uploads/chilanga4.jpeg',
      date: '04/04/2023'
    },
    
    // Mopani Copper Mines
    {
      id: 5,
      title: 'Mopani',
      description: 'Smelter and processing facilities',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani1.jpeg',
      date: '05/05/2024'
    },
    {
      id: 6,
      title: 'Mopani',
      description: 'Smelter maintenance operations',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani2.jpeg',
      date: '06/06/2024'
    },
    {
      id: 7,
      title: 'Mopani',
      description: 'Copper processing equipment',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani3.jpeg',
      date: '07/07/2024'
    },
    {
      id: 8,
      title: 'Mopani',
      description: 'Mine site infrastructure',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani4.jpeg',
      date: '08/08/2024'
    },
    {
      id: 9,
      title: 'Mopani',
      description: 'Aerial view of smelter complex',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani5.jpeg',
      date: '09/09/2024'
    },
    {
      id: 10,
      title: 'Mopani',
      description: 'Mine operations team',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani6.jpeg',
      date: '10/10/2025'
    },
    
    // Itezhi Tezhi Power
    {
      id: 11,
      title: 'Itezhi Tezhi Dam',
      description: 'Hydroelectric dam overview',
      category: 'Energy',
      imageUrl: '/lovable-uploads/its1.jpeg',
      date: '11/11/2025'
    },
    {
      id: 12,
      title: 'Power Station',
      description: 'Hydroelectric power generation',
      category: 'Energy',
      imageUrl: '/lovable-uploads/its2.jpeg',
      date: '12/12/2025'
    },
    {
      id: 13,
      title: 'Compressor',
      description: 'Hydro turbine maintenance',
      category: 'Energy',
      imageUrl: '/lovable-uploads/its3.jpeg',
      date: '01/13/2025'
    },
    {
      id: 14,
      title: 'Control Room',
      description: 'Power station control systems',
      category: 'Energy',
      imageUrl: '/lovable-uploads/its4.jpeg',
      date: '02/14/2025'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-platchem-navy sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-xl text-platchem-gray max-w-3xl mx-auto">
            Explore our portfolio of successful projects
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {items.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
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
                      <p className="text-sm opacity-90">{item.category}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-platchem-navy">{item.title}</h3>
                    <span className="text-xs bg-platchem-lime text-white px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-platchem-gray mt-2">
                    {item.date}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>


{/* Mining Overview Section */}
<div className="mt-20">
  <div className="bg-white rounded-xl p-8 md:p-12 text-center mb-12 shadow-md">
    <h2 className="text-3xl font-bold text-platchem-lime mb-4">Empowering the Mining Sector</h2>
    <p className="text-lg text-platchem-gray leading-relaxed max-w-3xl mx-auto">
      Our mining operations are backed by advanced equipment and engineering innovation — ensuring 
      safe, efficient, and sustainable extraction and processing. From copper smelting plants to 
      high-performance infrastructure, Platchem proudly supports Zambia’s mining excellence.
    </p>
  </div>

  {/* Mining Image Gallery */}
  <div>
    <h3 className="text-2xl font-bold text-platchem-lime mb-8 text-center">Mining Equipment Highlights</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { id: 1, imageUrl: '/lovable-uploads/mining1.jpeg', alt: 'Excavation equipment on site' },
        { id: 2, imageUrl: '/lovable-uploads/mining2.jpeg', alt: 'Copper smelting system' },
        { id: 3, imageUrl: '/lovable-uploads/mining3.jpeg', alt: 'Heavy-duty mining trucks' },
        { id: 4, imageUrl: '/lovable-uploads/mining4.jpeg', alt: 'On-site operations crew' },
        { id: 5, imageUrl: '/lovable-uploads/mining5.jpeg', alt: 'Open pit mine overview' },
        { id: 6, imageUrl: '/lovable-uploads/mining6.jpeg', alt: 'Open pit mine overview' }

      ].map((img) => (
        <div
          key={img.id}
          className="rounded-lg overflow-hidden h-64 shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={img.imageUrl}
            alt={img.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
</div>


        {/* CSR Commitment Section */}
        <div className="mt-20">
          <div className="bg-platchem-navy rounded-xl p-8 md:p-12 text-white mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Beyond Projects: Our Impact on Communities</h2>
              <p className="text-lg leading-relaxed">
                At Platchem, we believe true engineering excellence includes uplifting people and protecting the planet. 
                Our CSR initiatives focus on community development, youth empowerment, and sustainable practices — 
                because progress means nothing if it leaves others behind.
              </p>
            </div>
          </div>

          {/* Golf Club Support */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-platchem-navy mb-8 text-center">Golf Club Sponsorship</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="/lovable-uploads/golf.jpeg" 
                  alt="Golf Club Sponsorship 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="/lovable-uploads/golf2.jpeg" 
                  alt="Golf Club Sponsorship 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Soccer Team Support */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-platchem-navy mb-8 text-center">Soccer Team Sponsorship</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="/lovable-uploads/football.jpeg" 
                  alt="Soccer Team Sponsorship 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-64">
                <img 
                  src="/lovable-uploads/football2.jpeg" 
                  alt="Soccer Team Sponsorship 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Labor Day Participation */}
          <div>
            <h3 className="text-2xl font-bold text-platchem-navy mb-8 text-center">Labor Day Participation</h3>
            <div className="rounded-lg overflow-hidden max-w-2xl mx-auto">
              <img 
                src="/lovable-uploads/laborday.jpeg" 
                alt="Labor Day Participation"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
