import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-platchem-navy text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 bg-gradient-to-r from-platchem-navy to-platchem-navy/90">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-inter text-white">
              Stay Updated on Industrial Engineering Innovations
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Get the latest insights, project updates, and industry news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 text-base backdrop-blur-sm"
              />
              <Button className="bg-platchem-lime hover:bg-platchem-lime/90 text-white font-semibold h-12 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Company Info */}
          <div className="md:w-1/2 lg:w-1/3">
            <div className="flex items-center mb-6">
              <a href="/" className="flex items-center">
                <div className="bg-platchem-lime p-2 rounded-lg shadow-md">
                  <img 
                    src="/lovable-uploads/f8693ab6-eddf-42aa-835c-1192015823ef.png" 
                    alt="Platchem Logo" 
                    className="h-8 w-auto"
                  />
                </div>
              </a>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Leading Zambian engineering company delivering innovative industrial solutions 
              across mining, water treatment, and automation sectors since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-platchem-lime transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-platchem-lime transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-platchem-lime transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact & Office Info */}
          <div className="md:w-1/2 lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-platchem-lime mt-1" />
                  <div>
                    <div className="font-semibold text-white text-xl">Phone Number</div>
                    <div className="text-gray-300 text-lg">+260 767 771 006 / +260 969 999 222</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-platchem-lime mt-1" />
                  <div>
                    <div className="font-semibold text-white text-xl">Email</div>
                    <div className="text-gray-300 text-lg">platchem@platchemgroup.com</div>
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-platchem-lime mt-1" />
                  <div>
                    <div className="font-semibold text-white text-xl">Kitwe Office</div>
                    <div className="text-gray-300 text-lg">
                      Plot No.9, 12th Avenue,<br />
                      Nkana West
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-platchem-lime mt-1" />
                  <div>
                    <div className="font-semibold text-white text-xl">Lusaka Office</div>
                    <div className="text-gray-300 text-lg">
                      Plot No.10, Kawama Road,<br />
                      Woodlands
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-platchem-navy/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <div className="text-gray-300">
              &copy; {currentYear}. All rights reserved.
            </div>
            <div className="text-gray-300">
              Designed by{' '}
              <a 
                href="https://joshuamuhali-cv.web.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-platchem-lime font-semibold hover:text-white transition-colors duration-300 hover:underline"
              >
                Joshua Muhali
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
