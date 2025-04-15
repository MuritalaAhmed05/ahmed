"use client";
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, Linkedin, Twitter, Mail, CheckCircle, Loader2, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { useScrollAnimations } from '@/lib/animations';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

 
  useScrollAnimations();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    try {
      // Replace 'your-formspree-id' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/xnnqveyy', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitSuccess(true);
        setShowSuccessModal(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        
        // Hide the success alert after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setSubmitError(true);
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError(true);
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/MuritalaAhmed05' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/ahmed-dahdev' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://x.com/ahmed_muri50344?s=09' },
    { name: 'Email', icon: <Mail size={20} />, url: 'mailto:muritalaahmed407@gmail.com' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-black/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 contact-heading">Get In Touch</h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full mb-8 contact-divider"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-center contact-description">
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hello, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700 contact-form-container">
            {submitSuccess && (
              <Alert className="mb-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" size={18} />
                  <AlertDescription className="text-green-700 text-nowrap dark:text-green-300">
                    Message sent successfully! I'll get back to you soon.
                  </AlertDescription>
                </div>
              </Alert>
            )}
            
            {submitError && (
              <Alert className="mb-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2">
                  <X className="text-red-500" size={18} />
                  <AlertDescription className="text-red-700 text-nowrap dark:text-red-300">
                    {errorMessage}
                  </AlertDescription>
                </div>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="contact-form-item">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-50 dark:bg-black/10 border-gray-300 dark:border-gray-700 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              
              <div className="contact-form-item">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-50 dark:bg-black/10 border-gray-300 dark:border-gray-700 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              
              <div className="contact-form-item">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="bg-gray-50 dark:bg-black/10 border-gray-300 dark:border-gray-700 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              
              <div className="contact-form-item">
                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={16} />
                      Sending...
                    </span>
                  ) : "Send Message"}
                </Button>
              </div>
            </form>
          </div>

          <div className="contact-info-container">
            <h3 className="text-xl font-semibold mb-6 contact-heading-secondary">Connect With Me</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <Card key={index} className="overflow-hidden border-gray-200 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-400 transition-colors duration-300 social-link-item">
                  <CardContent className="p-4">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                      <span className="text-orange-500">{link.icon}</span>
                      <span>{link.name}</span>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gray-100 dark:bg-neutral-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 contact-info-card">
              <div className="contact-info-item">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Location</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Lagos, Nigeria</p>
              </div>
              
              <div className="contact-info-item">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Availability</h4>
                <p className="text-gray-600 dark:text-gray-400">Open to remote work and freelance opportunities</p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 contact-info-divider">
                <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100 contact-info-item">Response Time</h4>
                <p className="text-gray-600 dark:text-gray-400 contact-info-item">Usually within 24-48 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              Message Sent Successfully
            </DialogTitle>
            <DialogDescription className="pt-2">
              Thank you for your message. I've received it and will respond as soon as possible — typically within 24 to 48 hours.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-center">
            <Button 
              onClick={() => setShowSuccessModal(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;