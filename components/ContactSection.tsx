"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, Linkedin, Twitter, Mail, CheckCircle, Loader2, X, Send, MapPin, Clock, MessageSquare, Copy, Check } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { motion } from 'framer-motion';

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
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('muritalaahmed407@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    
    try {
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
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/MuritalaAhmed05', label: '@MuritalaAhmed05' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/ahmed-dahdev', label: 'Ahmed Dahdev' },
    { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://x.com/ahmeddahdev?s=09', label: '@ahmeddahdev' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:muritalaahmed407@gmail.com', label: 'muritalaahmed407@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-gray-50/30 dark:bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-3 flex items-center gap-1.5">
            <MessageSquare size={14} />
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Let's Build Something <span className="gradient-text-orange">Great</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
            I am currently open to full-time roles, freelance projects, and tech collaborations. Reach out using the form below or find me on social media!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-2xl border border-gray-200/60 dark:border-white/10 shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              Send Me a Message
              <Send size={18} className="text-orange-500" />
            </h3>

            {submitSuccess && (
              <Alert className="mb-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-xl">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} />
                  <AlertDescription className="text-sm font-medium">
                    Message sent successfully! I'll get back to you within 24 hours.
                  </AlertDescription>
                </div>
              </Alert>
            )}
            
            {submitError && (
              <Alert className="mb-6 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 rounded-xl">
                <div className="flex items-center gap-2">
                  <X size={18} />
                  <AlertDescription className="text-sm font-medium">
                    {errorMessage}
                  </AlertDescription>
                </div>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="glass-card bg-white/50 dark:bg-black/30 border-gray-200 dark:border-white/10 rounded-xl py-5 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="e.g. john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="glass-card bg-white/50 dark:bg-black/30 border-gray-200 dark:border-white/10 rounded-xl py-5 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  disabled={isSubmitting}
                  className="glass-card bg-white/50 dark:bg-black/30 border-gray-200 dark:border-white/10 rounded-xl focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-6 rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:scale-[1.01]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={18} />
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Right Column: Social Links & Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Copy Email Pill */}
            <div className="glass-card p-5 rounded-2xl border border-gray-200/60 dark:border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
                  <Mail size={20} />
                </div>
                <div className="truncate">
                  <p className="text-[11px] font-mono text-muted-foreground uppercase">Direct Email</p>
                  <p className="text-sm font-bold text-foreground truncate">muritalaahmed407@gmail.com</p>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-xl bg-orange-500/10 hover:bg-orange-500 text-orange-600 dark:text-orange-400 hover:text-white font-mono text-xs transition-all flex items-center gap-1.5 shrink-0"
              >
                {emailCopied ? (
                  <>
                    <Check size={14} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Social Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-card glass-card-hover p-4 rounded-xl border border-gray-200/60 dark:border-white/10 flex items-center gap-3 text-foreground hover:text-orange-500 transition-all"
                >
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                    {link.icon}
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold">{link.name}</p>
                    <p className="text-[11px] text-muted-foreground font-mono truncate">{link.label}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability & Location Card */}
            <div className="glass-card p-6 rounded-2xl border border-gray-200/60 dark:border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-bold text-sm text-foreground">Location</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Lagos, Nigeria (Available for Remote Worldwide)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-gray-100 dark:border-white/5">
                <Clock className="text-orange-500 shrink-0 mt-1" size={18} />
                <div>
                  <h4 className="font-bold text-sm text-foreground">Response Time</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Usually replies within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal Dialog */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md glass-card border border-emerald-500/30">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold">
              <CheckCircle size={22} />
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="pt-2 text-sm text-muted-foreground leading-relaxed">
              Thank you for reaching out. Your message has been sent directly to Muritala Ahmed. I will review it and get back to you shortly!
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="sm:justify-center pt-2">
            <Button 
              onClick={() => setShowSuccessModal(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 rounded-xl"
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