import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, X, ZoomIn } from 'lucide-react';

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  date: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  // Array of project images from Chilanga Cement, Mopani Copper Mines, and Itezhi Tezhi Power Corporation
  const galleryItems = [
    // Chilanga Cement Project
    {
      id: 1,
      title: 'Chilanga Cement Plant',
      description: 'Overview of the Chilanga Cement production facility showing the main plant structures and equipment.',
      category: 'Cement',
      imageUrl: '/lovable-uploads/chilanga1.jpeg',
      date: new Date(2023, 0, 15).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 2,
      title: 'Chilanga Cement Operations',
      description: 'Our team working on the maintenance and optimization of the cement production line.',
      category: 'Cement',
      imageUrl: '/lovable-uploads/chilanga2.jpeg',
      date: new Date(2023, 1, 22).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 3,
      title: 'Chilanga Cement Infrastructure',
      description: 'Detailed view of the cement plant infrastructure and material handling systems.',
      category: 'Cement',
      imageUrl: '/lovable-uploads/chilanga3.jpeg',
      date: new Date(2023, 2, 10).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 4,
      title: 'Chilanga Cement Facility',
      description: 'Aerial view of the Chilanga Cement plant showing the full scale of operations.',
      category: 'Cement',
      imageUrl: '/lovable-uploads/chilanga4.jpeg',
      date: new Date(2023, 3, 5).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    
    // Mopani Copper Mines Project
    {
      id: 5,
      title: 'Mopani Copper Mines Site',
      description: 'Overview of the Mopani Copper Mines site showing the smelter and processing facilities.',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani1.jpeg',
      date: new Date(2023, 4, 20).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 6,
      title: 'Mopani Smelter Operations',
      description: 'Our team working on the smelter maintenance and optimization at Mopani Copper Mines.',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani2.jpeg',
      date: new Date(2023, 4, 25).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 7,
      title: 'Mopani Processing Plant',
      description: 'Detailed view of the copper processing equipment at Mopani Mines.',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani3.jpeg',
      date: new Date(2023, 5, 5).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 8,
      title: 'Mopani Infrastructure',
      description: 'Infrastructure and support systems at Mopani Copper Mines.',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani4.jpeg',
      date: new Date(2023, 5, 15).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 9,
      title: 'Mopani Smelter Complex',
      description: 'Aerial view of the smelter complex at Mopani Copper Mines.',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani5.jpeg',
      date: new Date(2023, 5, 25).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 10,
      title: 'Mopani Operations',
      description: 'Our team conducting operations and maintenance at Mopani Copper Mines.',
      category: 'Mining',
      imageUrl: '/lovable-uploads/mopani6.jpeg',
      date: new Date(2023, 6, 5).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    
    // Itezhi Tezhi Power Corporation Project
    {
      id: 11,
      title: 'Itezhi Tezhi Dam',
      description: 'Aerial view of the Itezhi Tezhi Dam and hydroelectric power station.',
      category: 'Energy',
      imageUrl: '/lovable-uploads/its1.jpeg',
      date: new Date(2023, 6, 15).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 12,
      title: 'Power Station Operations',
      description: 'Our team working on the hydroelectric power generation systems at Itezhi Tezhi.',
      category: 'Energy',
      imageUrl: '/lovable-uploads/its2.jpeg',
      date: new Date(2023, 6, 20).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 13,
      title: 'Turbine Maintenance',
      description: 'Maintenance work on the hydroelectric turbines at Itezhi Tezhi Power Station.',
      category: 'Energy',
      imageUrl: '/lovable-uploads/its3.jpeg',
      date: new Date(2023, 6, 25).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    },
    {
      id: 14,
      title: 'Power Station Control Room',
      description: 'The control room at Itezhi Tezhi Power Station, monitoring power generation.',
      category: 'Energy',
      imageUrl: '/lovable-uploads/its4.jpeg',
      date: new Date(2023, 7, 1).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  };
  // Filter images based on active category
  const filteredImages = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(img => img.category === activeCategory);
    
  // Get unique categories
  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  // Render gallery items with proper typing
  const renderGalleryItems = () => {
    return filteredImages.map((galleryItem) => (
      <motion.div 
        key={galleryItem.id} 
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className="relative group cursor-pointer"
        onClick={() => setSelectedImage(galleryItem)}
      >
        <Card className="overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
          <div className="relative pt-[75%] overflow-hidden">
            <img
              src={galleryItem.imageUrl}
              alt={galleryItem.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white">
                <h3 className="font-semibold text-lg">{galleryItem.title}</h3>
                <p className="text-sm opacity-90">{galleryItem.category}</p>
              </div>
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium text-platchem-navy">{galleryItem.title}</h3>
            <p className="text-sm text-platchem-gray mt-1 line-clamp-2">
              {galleryItem.description}
            </p>
            <p className="text-xs text-gray-400 mt-2">{galleryItem.date}</p>
          </CardContent>
        </Card>
      </motion.div>
    ));
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Image Modal */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full max-w-6xl">
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto mx-auto rounded-lg"
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </motion.div>
      )}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-platchem-navy to-platchem-navy/90 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A5CE3A' fill-opacity='0.4'%3E%3Cpath d='m0 40 40-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="outline"
              className="mb-6 border-white text-white hover:bg-white hover:text-platchem-navy"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-inter animate-fade-in">
              Project <span className="text-platchem-lime">Gallery</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Explore our portfolio of engineering excellence across various industries and sectors
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? "bg-platchem-lime text-white hover:bg-platchem-lime/90" 
                    : "border-platchem-navy text-platchem-navy hover:bg-platchem-navy hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.imageUrl}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-platchem-lime text-white text-sm rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                    <Button
                      size="sm"
                      onClick={() => setSelectedImage(image)}
                      className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                    >
                      <ZoomIn className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30"
              size="icon"
            >
              <X className="h-4 w-4" />
            </Button>
            <img 
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
