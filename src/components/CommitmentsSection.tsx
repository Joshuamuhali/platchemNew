
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Target, 
  Leaf, 
  Award 
} from 'lucide-react';

const CommitmentsSection = () => {
  const commitments = [
    {
      icon: Shield,
      title: "Zero Harm Safety",
      description: "Our unwavering commitment to maintaining the highest safety standards with zero workplace incidents.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Target,
      title: "Technical Precision",
      description: "Delivering engineered solutions with absolute precision and attention to every technical detail.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Implementing environmentally responsible engineering solutions for long-term sustainability.",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-platchem-navy relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("/lovable-uploads/a2739381-a9b8-49ab-bac2-15eec267bcef.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-inter">
            Our Commitments
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built on a foundation of integrity, innovation, and excellence, 
            these principles guide everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${commitment.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <commitment.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-platchem-lime transition-colors duration-300">
                  {commitment.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {commitment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;
