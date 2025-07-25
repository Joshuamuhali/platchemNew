import React, { useState, useRef, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, projectName }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef<Slider>(null);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false, // We'll use custom arrows
    className: 'carousel-container',
    beforeChange: () => setIsPlaying(false), // Pause autoplay when manually changing slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ]
  };
  


  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
    setIsPlaying(false);
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
    setIsPlaying(false);
  };

  // Add styles to the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .carousel-container .slick-prev:before,
      .carousel-container .slick-next:before {
        color: #1a365d; /* platchem-navy color */
        font-size: 24px;
      }
      .carousel-container .slick-dots li button:before {
        font-size: 10px;
        color: #1a365d;
        opacity: 0.5;
      }
      .carousel-container .slick-dots li.slick-active button:before {
        color: #1a365d;
        opacity: 1;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
      <div className="relative group">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="h-64 md:h-96 w-full">
              <div className="h-full w-full flex items-center justify-center overflow-hidden">
                <img
                  src={image}
                  alt={`${projectName} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x500?text=Project+Image';
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
        
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-platchem-navy p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-platchem-navy p-2 rounded-full shadow-md transition-all opacity-0 group-hover:opacity-100 z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Play/Pause Button */}
        <div className="absolute bottom-4 right-4 z-10">
          <button
            onClick={togglePlayPause}
            className="bg-white/80 hover:bg-white text-platchem-navy p-2 rounded-full shadow-md transition-all"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
