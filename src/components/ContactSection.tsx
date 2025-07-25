import React from 'react';
import { motion } from 'framer-motion';
import GreenForm from './GreenForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-platchem-navy mb-4">
            Get In Touch
          </h2>
          <p className="text-platchem-gray max-w-2xl mx-auto">
            Have questions or ready to start your project? Contact us today and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-platchem-lime/20">
          <GreenForm onClose={() => {}} />
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
