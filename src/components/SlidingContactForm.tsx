import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  agreeToTerms: boolean;
}

interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  budget: string;
  message: string;
  preferredTime: string;
}

const SlidingContactForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState<'contact' | 'quote'>('contact');
  const [contactData, setContactData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    agreeToTerms: false
  });
  const [quoteData, setQuoteData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    budget: '',
    message: '',
    preferredTime: ''
  });
  const { toast } = useToast();

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.agreeToTerms) {
      toast({
        title: "Error",
        description: "Please agree to our terms and conditions.",
        variant: "destructive"
      });
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you shortly.",
        variant: "default"
      });
      setContactData({
        name: '',
        email: '',
        phone: '',
        message: '',
        agreeToTerms: false
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Success!",
        description: "Your quote request has been submitted. We'll contact you shortly.",
        variant: "default"
      });
      setQuoteData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        industry: '',
        budget: '',
        message: '',
        preferredTime: ''
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your quote request. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="fixed right-0 top-0 h-full w-full max-w-sm md:max-w-4xl z-50">
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-platchem-lime hover:bg-platchem-lime/90 text-white z-50"
      >
        Get in Touch
      </Button>

      {/* Sliding Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-4xl bg-white shadow-xl flex flex-col md:flex-row"
          >
            {/* Left Info Panel */}
            <div className="bg-platchem-navy text-white p-8 w-full md:w-1/2 flex flex-col justify-between">
              <div>
                <img src="/logo.png" alt="Company Logo" className="h-12 mb-6" />
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-6 text-sm opacity-80">We'd love to hear from you. Here's how you can reach us:</p>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-platchem-lime" />
                    <span>Plot 1234, Industrial Road, Lusaka</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-platchem-lime" />
                    <span>info@platchemgroup.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-platchem-lime" />
                    <span>+260 761 110 505</span>
                  </div>
                </div>
              </div>
              <p className="text-xs mt-10 opacity-60">&copy; {new Date().getFullYear()} Platchem Ltd. All rights reserved.</p>
            </div>

            {/* Right Form Panel */}
            <div className="w-full md:w-1/2 p-6 overflow-y-auto">
              {/* Form Toggle */}
              <div className="mb-6">
                <div className="flex space-x-4">
                  <Button
                    variant={activeForm === 'contact' ? 'default' : 'outline'}
                    onClick={() => setActiveForm('contact')}
                    className="flex-1"
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant={activeForm === 'quote' ? 'default' : 'outline'}
                    onClick={() => setActiveForm('quote')}
                    className="flex-1"
                  >
                    Request Quote
                  </Button>
                </div>
              </div>

              {/* Form Content */}
              <AnimatePresence mode="wait">
                {activeForm === 'contact' ? (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-6"
                  >
                    <Card className="shadow-none border-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold text-platchem-navy">
                          Contact Us
                        </CardTitle>
                        <CardDescription className="text-platchem-navy/80">
                          We'd love to hear from you
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleSubmitContact} className="space-y-6">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              type="text"
                              value={contactData.name}
                              onChange={(e) => setContactData(prev => ({ ...prev, name: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={contactData.email}
                              onChange={(e) => setContactData(prev => ({ ...prev, email: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number (optional)</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={contactData.phone}
                              onChange={(e) => setContactData(prev => ({ ...prev, phone: e.target.value }))}
                            />
                          </div>
                          <div>
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                              id="message"
                              value={contactData.message}
                              onChange={(e) => setContactData(prev => ({ ...prev, message: e.target.value }))}
                              required
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <Input
                              id="terms"
                              type="checkbox"
                              checked={contactData.agreeToTerms}
                              onChange={(e) => setContactData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                            />
                            <Label htmlFor="terms">
                              I agree to the <span className="text-platchem-lime">terms and conditions</span>
                            </Label>
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-platchem-lime hover:bg-platchem-lime/90"
                          >
                            Send Message
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <motion.div
                    key="quote"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="space-y-6"
                  >
                    <Card className="shadow-none border-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-2xl font-bold text-platchem-navy">
                          Request a Quote
                        </CardTitle>
                        <CardDescription className="text-platchem-navy/80">
                          Share your project details with us
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleSubmitQuote} className="space-y-6">
                          <div>
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input
                              id="fullName"
                              type="text"
                              value={quoteData.fullName}
                              onChange={(e) => setQuoteData(prev => ({ ...prev, fullName: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              type="email"
                              value={quoteData.email}
                              onChange={(e) => setQuoteData(prev => ({ ...prev, email: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={quoteData.phone}
                              onChange={(e) => setQuoteData(prev => ({ ...prev, phone: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="company">Company Name</Label>
                            <Input
                              id="company"
                              type="text"
                              value={quoteData.companyName}
                              onChange={(e) => setQuoteData(prev => ({ ...prev, companyName: e.target.value }))}
                            />
                          </div>
                          <div>
                            <Label htmlFor="industry">Industry</Label>
                            <select
                              id="industry"
                              value={quoteData.industry}
                              onChange={(e) => setQuoteData(prev => ({ ...prev, industry: e.target.value }))}
                              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-platchem-lime"
                              required
                            >
                              <option value="">Select Industry</option>
                              <option value="mining">Mining</option>
                              <option value="water">Water & Sanitation</option>
                              <option value="manufacturing">Manufacturing</option>
                              <option value="utilities">Utilities & Energy</option>
                              <option value="civil">Civil Infrastructure</option>
                              <option value="industrial">Industrial Plants</option>
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="budget">Estimated Budget</Label>
                            <Input
                              id="budget"
                              type="text"
                              placeholder="e.g., $50,000 - $100,000"
                              value={quoteData.budget}
                              onChange={(e) => setQuoteData(prev => ({ ...prev, budget: e.target.value }))}
                            />
                          </div>
                          <div>
                            <Label htmlFor="message">Project Details</Label>
                            <Textarea
                              id="message"
                              value={quoteData.message}
                              onChange={(e) => setQuoteData(prev => ({ ...prev, message: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="preferredTime">Preferred Time</Label>
                            <Input
                              id="preferredTime"
                              type="datetime-local"
                              value={quoteData.preferredTime}
                              onChange={(e) => setQuoteData(prev => ({ ...prev, preferredTime: e.target.value }))}
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-platchem-lime hover:bg-platchem-lime/90"
                          >
                            Submit Quote Request
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
              <Button
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="w-full text-platchem-navy hover:text-platchem-lime"
              >
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SlidingContactForm;
