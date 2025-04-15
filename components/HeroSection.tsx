"use client"
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { useScrollAnimations } from '@/lib/animations';
import Image from 'next/image';

const HeroSection = () => {
  useScrollAnimations();
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-32 pb-8 overflow-hidden "
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-medium text-orange-500 dark:text-orange-400 mb-2 border border-orange-500 dark:border-orange-400 rounded-full px-3 py-1 slide-up">
              Hello, my name is
            </span>
            
            <h1 className="hero-role text-4xl sm:text-5xl md:text-6xl font-bold mb-2 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
             Muritala Ahmed
            </h1>
            
            <h2 className="hero-role text-3xl sm:text-4xl md:text-5xl font-bold text-gray-600 dark:text-gray-300 mb-6">
              Frontend Web Developer
            </h2>
            
            <p className="hero-description text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-xl leading-relaxed">
              I build exceptional and accessible digital experiences for the web,
              focusing on responsive design and modern web technologies.
            </p>
            
            <div className="hero-buttons flex flex-wrap gap-4 mb-8">
              <div className="button-item">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white bounce-in">
                  <a href="#projects">View My Work</a>
                </Button>
              </div>
              <div className="button-item">
                <Button variant="outline" size="lg" asChild className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-gray-800">
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 transition-colors font-medium"
                  >Download Resume</a>
                </Button>
              </div>
            </div>
            
            <div className="hero-social flex gap-4">
              <a href="https://github.com/MuritalaAhmed05" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-orange-400 dark:hover:bg-gray-800 transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ahmed-dahdev" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-orange-400 dark:hover:bg-gray-800 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://x.com/ahmed_muri50344?s=09" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full text-gray-600 hover:text-orange-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-orange-400 dark:hover:bg-gray-800 transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Decorative backdrop */}
              <div className="hero-decoration absolute inset-0 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-3xl opacity-20"></div>
              
              {/* Image placeholder */}
              <div className="hero-image relative w-full h-full rounded-full border-4 border-orange-500/20 dark:border-orange-400/20 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <Image

  src="/Ahmed.jpg"
  alt="Muritala Ahmed"
  fill
  className="object-cover rounded-full"
/>

                </div>
              </div>

              {/* Static decorative elements */}
              <div className="hero-decoration absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-orange-500 dark:bg-orange-400 opacity-20" />
              <div className="hero-decoration absolute -top-5 -left-5 w-16 h-16 rounded-full bg-orange-500 dark:bg-orange-400 opacity-15" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8">
        <a 
          href="#about" 
          aria-label="Scroll to About section"
          className="scroll-down text-gray-500 hover:text-orange-500 dark:text-gray-400 dark:hover:text-orange-400 transition-colors"
        >
          <ArrowDownCircle size={36} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;