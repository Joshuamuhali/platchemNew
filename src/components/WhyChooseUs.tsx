import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Engineering and Mining Excellence",
      description: "Your trusted partner with 17* years of Engineering and Mining service excellence"
    },
    {
      title: "Quality and Reliability",
      description: "Consistent products and services delivery"
    },
    {
      title: "Customer Service",
      description: "Strong customer service practices and a focus on solving customer problems"
    },
    {
      title: "Ethical Practices",
      description: "Transparent, ethical values with a commitment to fair pricing"
    },
    {
      title: "Exceeding Expectations",
      description: "Tailor our solution to your needs and expectations, anchored by a consistent team effort to meet them"
    },
    {
      title: "Purpose beyond Profit",
      description: "Our commitment to social and environmental issues is core to everything we do"
    },
    {
      title: "24/7 Support",
      description: "Emergency support available around the clock"
    }
  ];

  const navigate = useNavigate();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-platchem-navy mb-4 font-inter">
            Why Choose Platchem?
          </h2>
          <p className="text-xl text-platchem-gray max-w-3xl mx-auto leading-relaxed">
            Discover why Platchem is your trusted partner in engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-gray-50"
              style={{ 
                opacity: 1,
                transform: 'translateY(0) scale(1)',
                transition: 'transform 0.3s ease-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <CardHeader className="bg-gradient-to-br from-platchem-navy to-platchem-navy/90 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-platchem-lime/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <Check className="h-12 w-12 text-platchem-lime mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl font-bold mb-2">{reason.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
