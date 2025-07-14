import React, { useState } from 'react';
import { ArrowLeft, ZoomIn, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images for gallery
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800",
      alt: "Engineering Project 1",
      category: "Mining"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800",
      alt: "Engineering Project 2",
      category: "Industrial"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800",
      alt: "Engineering Project 3",
      category: "Automation"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      alt: "Engineering Project 4",
      category: "Technology"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800",
      alt: "Engineering Project 5",
      category: "Mining"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800",
      alt: "Engineering Project 6",
      category: "Industrial"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
      alt: "Engineering Project 7",
      category: "Automation"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      alt: "Engineering Project 8",
      category: "Technology"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      alt: "Engineering Project 9",
      category: "Mining"
    }
  ];

  const categories = ["All", "Mining", "Industrial", "Automation", "Technology"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-inter">
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
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-platchem-lime text-white text-sm rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-2">{image.alt}</h3>
                    <Button
                      size="sm"
                      onClick={() => setSelectedImage(image.src)}
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
              src={selectedImage}
              alt="Gallery Image"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
