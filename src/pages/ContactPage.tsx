import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SlidingContactForm from '@/components/SlidingContactForm';

const gradientColors = {
  primary: 'from-platchem-lime to-platchem-lime/80',
  secondary: 'from-platchem-navy to-platchem-navy/80',
  glass: 'from-white/5 to-transparent',
};

const ContactPage = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-platchem-lime/10 to-transparent blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h1 className="text-4xl lg:text-5xl font-bold text-platchem-navy mb-4">
                Contact Us
              </h1>
              <p className="text-platchem-gray max-w-2xl mx-auto">
                Connect with our expert engineering team for all your project needs
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/5 backdrop-blur-sm border border-platchem-lime/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-platchem-navy">
                  Get in Touch
                </CardTitle>
                <CardDescription className="text-platchem-gray">
                  Our contact information and ways to reach us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                    <Phone className="text-platchem-lime h-6 w-6" />
                    <div>
                      <h3 className="font-semibold text-platchem-navy">Phone</h3>
                      <p className="text-platchem-gray">+260 761 110 505</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                    <Mail className="text-platchem-lime h-6 w-6" />
                    <div>
                      <h3 className="font-semibold text-platchem-navy">Email</h3>
                      <p className="text-platchem-gray">info@platchem.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                    <MapPin className="text-platchem-lime h-6 w-6" />
                    <div>
                      <h3 className="font-semibold text-platchem-navy">Address</h3>
                      <p className="text-platchem-gray">Plot 5352, 2nd Floor, Shop 1, Kabulonga, Lusaka, Zambia</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white/5 backdrop-blur-sm border border-platchem-lime/10">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-platchem-navy">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-platchem-gray">
                  We'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SlidingContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
