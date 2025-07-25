
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const [counts, setCounts] = useState({
    projects: 0,
    engineers: 0,
    years: 0,
    certifications: 0
  });

  const finalCounts = {
    projects: 324,
    engineers: 41,
    years: 17
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const intervals: { [key: string]: NodeJS.Timeout } = {};

      Object.keys(finalCounts).forEach((key) => {
        const final = finalCounts[key as keyof typeof finalCounts];
        const increment = final / (duration / 50);
        let current = 0;

        intervals[key] = setInterval(() => {
          current += increment;
          if (current >= final) {
            current = final;
            clearInterval(intervals[key]);
          }
          setCounts(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, 50);
      });

      return () => {
        Object.values(intervals).forEach(interval => clearInterval(interval));
      };
    }
  }, [inView]);

  const stats = [
    {
      number: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful engineering projects delivered',
      delay: '0s'
    },
    {
      number: counts.engineers,
      suffix: '+',
      label: 'Expert Engineers',
      description: 'Certified professionals on our team',
      delay: '0.2s'
    },
    {
      number: counts.years,
      suffix: '',
      label: 'Years Experience',
      description: 'Serving Zambian industries since 2008',
      delay: '0.4s'
    }
  ];

  return (
    <section id="about" className="bg-platchem-navy py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A5CE3A' fill-opacity='0.4'%3E%3Cpath d='m0 40 40-40h-40z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-inter">
            Proven Track Record
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
            Numbers that speak to our commitment to engineering excellence
          </p>
          
          <div 
            ref={ref}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 max-w-4xl mx-auto"
          >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-500"
              style={{ 
                animation: inView ? `fade-in 0.8s ease-out ${stat.delay} both` : 'none'
              }}
            >
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-platchem-lime mb-2 font-inter group-hover:text-white transition-colors duration-300 relative">
                <span className="inline-block animate-scale-in" style={{ animationDelay: stat.delay }}>
                  {stat.number}{stat.suffix}
                </span>
              </div>
              <div className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-gray-300 text-sm lg:text-base leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
