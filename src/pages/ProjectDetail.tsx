import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { clientProjects } from '@/types/clientProjects';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ImageCarousel from '@/components/ImageCarousel';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = clientProjects.find(p => p.id === id);

  // Update document title when project changes
  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Project Details | Platchem Ltd`;
    }
    return () => {
      document.title = 'Platchem Ltd';
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-3xl font-bold text-platchem-navy mb-4">Project Not Found</h1>
          <p className="text-platchem-gray mb-6">The project you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button and breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <Button variant="ghost" asChild className="text-platchem-navy hover:bg-platchem-lime/10">
              <Link to="/#clients" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Clients
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <img 
                src={project.logo} 
                alt={project.name} 
                className="h-16 w-auto mr-4 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/150x80?text=Client+Logo';
                }}
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-platchem-navy">
                  {project.name}
                </h1>
                <p className="text-platchem-gray">{project.location} • {project.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Project Gallery */}
              {project.images && project.images.length > 0 && (
                <ImageCarousel images={project.images} projectName={project.name} />
              )}

              {/* Project Details */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold text-platchem-navy mb-4">Project Overview</h2>
                    <div className="prose max-w-none text-platchem-gray">
                      <p className="mb-4">{project.detailedInfo}</p>
                      
                      {project.challenges && project.challenges.length > 0 && (
                        <div className="mt-8">
                          <h3 className="text-xl font-semibold text-platchem-navy mb-3">Challenges & Solutions</h3>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-platchem-lime mr-2">•</span>
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Project Meta */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-platchem-navy mb-4">Project Details</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-platchem-gray/70">Location</p>
                          <p className="font-medium">{project.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-platchem-gray/70">Date</p>
                          <p className="font-medium">{project.date}</p>
                        </div>
                        <div>
                          <p className="text-sm text-platchem-gray/70">Services</p>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {project.services.map((service, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-platchem-lime/10 text-platchem-navy"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {project.outcomes && project.outcomes.length > 0 && (
                      <div className="bg-platchem-navy/5 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-platchem-navy mb-4">Key Outcomes</h3>
                        <ul className="space-y-3">
                          {project.outcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-platchem-lime mr-2">✓</span>
                              <span className="text-platchem-gray">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
