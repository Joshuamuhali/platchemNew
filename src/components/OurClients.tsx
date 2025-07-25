import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Fallback image for when client logos are missing
const fallbackLogo = 'https://via.placeholder.com/150x80?text=Client+Logo';

const clientProjects = [
  {
    id: 'chilanga-cement',
    name: 'Chilanga Cement',
    logo: '/lovable-uploads/download.png',
    briefInfo: 'Multi-site infrastructure rehabilitation and ongoing maintenance support at Ndola and Chilanga plants.',
    services: ['Construction', 'Maintenance', 'Engineering']
  },
  {
    id: 'mopani-copper-mines',
    name: 'Mopani Copper Mines',
    logo: '/lovable-uploads/mopani logo.png',
    briefInfo: 'ESP shutdown maintenance for Mufulira Smelter to ensure air quality compliance and system efficiency.',
    services: ['Mining', 'Maintenance', 'Engineering']
  },
  {
    id: 'munali-nickel-mine',
    name: 'Munali Nickel Mine',
    logo: '/lovable-uploads/Munali Nickel Mine logo.jpg',
    briefInfo: 'Underground ventilation raise and slot raise drilling, including ore handling maintenance.',
    services: ['Mining', 'Drilling', 'Maintenance']
  },
  {
    id: 'itezhi-tezhi-power',
    name: 'Itezhi Tezhi Power Corporation',
    logo: '/lovable-uploads/Itezhi Tezhi Power logo.jpg',
    briefInfo: 'Underground tunnel support and shotcrete reinforcement to improve power infrastructure stability.',
    services: ['Power', 'Civil Engineering', 'Construction']
  },
  {
    id: 'zambian-breweries',
    name: 'Zambian Breweries Plc',
    logo: '/lovable-uploads/zb logo.png',
    briefInfo: 'Installation and commissioning of stainless steel pipework and construction of utilities plant.',
    services: ['Industrial', 'Mechanical', 'Utilities']
  }
];

const OurClients = () => {
  const navigate = useNavigate();

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-platchem-navy mb-6 font-inter">
            Our Clients
          </h2>
          <p className="text-xl text-platchem-gray max-w-3xl mx-auto leading-relaxed">
            A look at some of the companies we've worked with and the value we've delivered through project excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientProjects.map((project) => (
            <Card
              key={project.id}
              className="shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader className="p-6 border-b border-gray-200 bg-white">
                <div className="flex justify-center w-full">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="h-12 w-auto max-w-[180px] object-contain mx-auto"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackLogo;
                    }}
                    style={{
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 bg-white flex-grow">
                <h3 className="text-xl font-semibold text-platchem-navy mb-2">
                  {project.name}
                </h3>
                <p className="text-platchem-gray mb-4">{project.briefInfo}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.services.slice(0, 3).map((service, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-platchem-lime/10 text-platchem-navy"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 bg-gray-50 border-t border-gray-100">
                <Button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="w-full bg-platchem-lime hover:bg-platchem-lime/90 text-platchem-navy font-medium transition-colors"
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
