import React from 'react';
import { motion } from 'framer-motion';
import GreenForm from '@/components/GreenForm';
import { Card, CardContent } from "@/components/ui/card";

const ContactPage = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
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
                Fill out the form below and our team will get back to you as soon as possible
              </p>
            </div>
          </motion.div>

          <Card className="border border-platchem-lime/20 shadow-lg overflow-hidden">
            <CardContent className="p-6">
              <GreenForm onClose={() => {}} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
