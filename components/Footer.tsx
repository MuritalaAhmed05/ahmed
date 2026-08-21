"use client";
import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp, Code2 } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    { name: 'Twitter', icon: <Twitter size={18} />, url: 'https://x.com/ahmeddahdev?s=09' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:muritalaahmed407@gmail.com' },
  ];
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="pt-16 pb-8 bg-gray-100/80 dark:bg-black border-t border-gray-200 dark:border-white/10 relative">
      {/* Scroll to top button */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Button 
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          aria-label="Scroll to top"
          className="rounded-full h-11 w-11 glass-card bg-white dark:bg-neutral-900 shadow-xl border border-gray-200 dark:border-white/20 text-orange-500 hover:scale-110 hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          <ArrowUp size={20} />
        </Button>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-mono font-extrabold text-lg text-foreground mb-3">
              <span className="text-orange-500">&lt;</span>
              Muritala Ahmed
              <span className="text-orange-500">/&gt;</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              Frontend web developer passionate about building high-performance, accessible, and pixel-perfect web applications with React & Next.js.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2.5 text-muted-foreground hover:text-orange-500 hover:bg-orange-500/10 rounded-xl transition-all"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-500 mb-4">
              Quick Navigation
            </h4>
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-xs sm:text-sm text-muted-foreground hover:text-orange-500 transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Featured Works Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-orange-500 mb-4">
              Featured Highlights
            </h4>
            <div className="flex flex-col space-y-2.5">
              <a href="https://dynamicilluminations.com.ng/" target="_blank" rel="noopener noreferrer" className="group text-xs sm:text-sm flex items-center gap-2">
                <Code2 size={14} className="text-orange-500 shrink-0" />
                <span className="text-muted-foreground group-hover:text-orange-500 transition-colors">Dynamic Illuminations</span>
              </a>
              <a href="https://flimzy.vercel.app/" target="_blank" rel="noopener noreferrer" className="group text-xs sm:text-sm flex items-center gap-2">
                <Code2 size={14} className="text-orange-500 shrink-0" />
                <span className="text-muted-foreground group-hover:text-orange-500 transition-colors">Flimzy Movie App</span>
              </a>
              <a href="https://shop-ease-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" className="group text-xs sm:text-sm flex items-center gap-2">
                <Code2 size={14} className="text-orange-500 shrink-0" />
                <span className="text-muted-foreground group-hover:text-orange-500 transition-colors">ShopEase E-Commerce</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Muritala Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;