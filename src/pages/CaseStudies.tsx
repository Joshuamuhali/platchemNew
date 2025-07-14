import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation, useNavigate } from 'react-router-dom';

const CaseStudies = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const categoryParam = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(categoryParam);

  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const caseStudies = [
    {
      id: 1,
      title: "Copper Mine Automation System",
      location: "Chililabombwe, Zambia",
      duration: "18 months",
      teamSize: 12,
      category: "Mining",
      client: "Konkola Copper Mines",
      results: [
        "35% efficiency increase",
        "Zero safety incidents",
        "ROI achieved in 14 months"
      ],
      image: "/lovable-uploads/miningAutomation.png",
      description: "Complete automation overhaul of copper extraction processes, resulting in significant efficiency and safety improvements."
    },
    {
      id: 2,
      title: "Deep-Level Mining Locomotive Supply",
      location: "Kitwe, Zambia",
      duration: "12 months",
      teamSize: 8,
      category: "Mining",
      client: "Goodman Locomotives Users",
      results: [
        "Improved equipment uptime",
        "Faster repair turnaround",
        "Enhanced underground safety"
      ],
      image: "/lovable-uploads/Deep-Level.png",
      description: "Supply and maintenance of battery and trolley locomotives for underground mining operations, including spare parts and technical support."
    },
    {
      id: 3,
      title: "Industrial Water Treatment Plant",
      location: "Mazabuka, Zambia",
      duration: "12 months",
      teamSize: 8,
      category: "Water & Sanitation",
      client: "Zambia Sugar Company",
      results: [
        "99.8% water purity",
        "50% waste reduction",
        "Full regulatory compliance"
      ],
      image: "/lovable-uploads/Industrial Water.png",
      description: "Design and installation of advanced water treatment facilities for industrial processing applications."
    },
    {
      id: 4,
      title: "Dewatering Pump Systems for Mining",
      location: "Ndola, Zambia",
      duration: "10 months",
      teamSize: 6,
      category: "Water & Sanitation",
      client: "Unnamed Mining Clients",
      results: [
        "Reduced water-related downtime",
        "Improved pump lifespan",
        "Timely spare parts delivery"
      ],
      image: "/lovable-uploads/Dewatering.png",
      description: "Supply, refurbishment, and servicing of pumps for underground and surface mining water management."
    },
    {
      id: 5,
      title: "Manufacturing Process Automation",
      location: "Lusaka, Zambia",
      duration: "8 months",
      teamSize: 6,
      category: "Manufacturing",
      client: "Zambeef Products PLC",
      results: [
        "40% productivity increase",
        "Zero contamination incidents",
        "Full product traceability"
      ],
      image: "/lovable-uploads/automation.png",
      description: "Complete automation of meat processing lines with SCADA integration and quality control systems."
    },
    {
      id: 6,
      title: "Fertilizer Plant Upgrade",
      location: "Kafue, Zambia",
      duration: "15 months",
      teamSize: 10,
      category: "Manufacturing",
      client: "Nitrogen Chemicals of Zambia",
      results: [
        "25% capacity increase",
        "50% emissions reduction",
        "Enhanced safety ratings"
      ],
      image: "/lovable-uploads/fertilizer.png",
      description: "Modernization of fertilizer production facilities with enhanced safety and efficiency controls."
    },
    {
      id: 7,
      title: "Power Distribution Network Modernization",
      location: "Kitwe, Zambia",
      duration: "24 months",
      teamSize: 15,
      category: "Utilities & Energy",
      client: "Copperbelt Energy Corporation",
      results: [
        "99.9% uptime",
        "30% reduced transmission losses",
        "Improved load balancing"
      ],
      image: "/lovable-uploads/power.png",
      description: "Upgrade of electrical distribution networks servicing multiple mining operations to improve uptime and reduce losses."
    },
    {
      id: 8,
      title: "Motor Control & Automation Systems",
      location: "Lusaka, Zambia",
      duration: null,
      teamSize: 7,
      category: "Utilities & Energy",
      client: "Various Industrial Clients",
      results: [
        "Increased operational reliability",
        "Reduced maintenance costs"
      ],
      image: "/lovable-uploads/motor.png",
      description: "Supply and integration of motor control centers, soft starters, and protective devices for industrial clients."
    },
    {
      id: 9,
      title: "Civil Infrastructure",
      location: "Lusaka, Zambia",
      duration: "36 months",
      teamSize: 20,
      category: "Civil Infrastructure",
      client: "Lusaka Provincial Administration",
      results: [
        "Delivered on time and 15% under budget",
        "LEED certification"
      ],
      image: "/lovable-uploads/cars.png",
      description: "Design and construction of modern facilities for government and commercial use."
    },
    {
      id: 10,
      title: "Industrial Plant Automation and Safety Upgrade",
      location: "Kafue, Zambia",
      duration: "15 months",
      teamSize: 10,
      category: "Industrial Plants",
      client: "Various Industrial Clients",
      results: [
        "Increased production capacity",
        "Reduced emissions",
        "Improved safety compliance"
      ],
      image: "/lovable-uploads/IDA.png",
      description: "Turnkey modernization of industrial plants with full process automation and enhanced safety systems."
    }
  ];

  const categories = ['All', ...new Set(caseStudies.map(study => study.category))];
  const filteredStudies = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-inter">
      <section className="bg-gradient-to-r from-platchem-navy to-platchem-navy/90 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A5CE3A' fill-opacity='0.4'%3E%3Cpath d='m0 40 40-40h-40z'/%3E%3C/g%3E%3C/svg%3E\")"
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
              Case <span className="text-platchem-lime">Studies</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Real-world examples of our engineering excellence across various industries
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  navigate(`/case-studies?category=${category === 'All' ? '' : category}`);
                }}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredStudies.map((study, index) => (
              <Card 
                key={study.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-3 py-1 bg-platchem-lime text-white text-sm rounded-full">
                      {study.category}
                    </span>
                    {study.duration && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {study.duration}
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-xl text-platchem-navy group-hover:text-platchem-lime transition-colors duration-300">
                    {study.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {study.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {study.teamSize} engineers
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-platchem-navy mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="w-2 h-2 bg-platchem-lime rounded-full mr-2 flex-shrink-0"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-600">
                        <strong>Client:</strong> {study.client}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;