"use client";
import React, { useEffect } from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useScrollAnimations } from '@/lib/animations';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  useScrollAnimations();


  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, url: 'https://github.com/MuritalaAhmed05' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/ahmed-dahdev' },
    { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://x.com/ahmed_muri50344?s=09' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:muritalaahmed407@gmail.com' },
  ];
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-700 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button 
          onClick={scrollToTop}
          variant="outline"
          size="icon"
           aria-label="Scroll to top"
          className="rounded-full h-10 w-10 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 transition-all"
        >
          <ArrowUp size={18} className="text-gray-700 dark:text-gray-300" />
        </Button>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand & About */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 contact-heading">Muritala Ahmed</h3>
            <div className="h-1 w-12 bg-orange-500 rounded-full mb-4 md:ml-0 mx-auto md:mx-0 contact-divider"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left contact-description">
              Frontend developer passionate about creating intuitive and responsive user experiences with modern web technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md social-link-item"
                  aria-label={`Follow me on ${link.name}`}
                  
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 contact-heading">Quick Links</h3>
            <div className="h-1 w-12 bg-orange-500 rounded-full mb-4 md:ml-0 mx-auto md:mx-0 contact-divider"></div>
            <nav className="flex flex-col space-y-3 contact-info-container">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-sm text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors contact-info-item"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Latest Projects */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-gray-100 contact-heading">Latest Projects</h3>
            <div className="h-1 w-12 bg-orange-500 rounded-full mb-4 md:ml-0 mx-auto md:mx-0 contact-divider"></div>
            <div className="flex flex-col space-y-3 contact-info-container">
              <a href="#project1" className="group text-sm flex items-center gap-2 contact-info-item">
                <Code size={14} className="text-orange-500" />
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">E-commerce Dashboard</span>
              </a>
              <a href="#project2" className="group text-sm flex items-center gap-2 contact-info-item">
                <Code size={14} className="text-orange-500" />
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">Task Management App</span>
              </a>
              <a href="#project3" className="group text-sm flex items-center gap-2 contact-info-item">
                <Code size={14} className="text-orange-500" />
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">Portfolio Website</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 sm:contact-info-divider">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0 contact-form-item">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                © {currentYear} Muritala Ahmed. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 sm:contact-form-item">
              <span className="flex items-center">
                <span>Made with</span>
                <Heart size={14} className="mx-1 text-red-500" />
                <span>and a cup of coffee</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;