"use client";
import React, { useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Database, Globe, Layout, 
  Layers, Smartphone, Palette, Zap,
  User, Award, Clock, Briefcase
} from 'lucide-react';
import Image from 'next/image';
import { useScrollAnimations } from '@/lib/animations';

const AboutSection = () => {
  const techStack = [
    { name: 'Next.js', icon: <Globe className="h-8 w-8" /> },
    { name: 'TypeScript', icon: <Code className="h-8 w-8" /> },
    { name: 'Tailwind CSS', icon: <Palette className="h-8 w-8" /> },
    { name: 'React', icon: <Layers className="h-8 w-8" /> },
    { name: 'Firebase', icon: <Database className="h-8 w-8" /> },
    { name: 'Responsive', icon: <Smartphone className="h-8 w-8" /> },
    { name: 'UI/UX', icon: <Layout className="h-8 w-8" /> },
    { name: 'Performance', icon: <Zap className="h-8 w-8" /> },
  ];

  //  useScrollAnimations();
 

  return (
    <section id="about" className="py-12 md:py-12 bg-gradient-to-b from-accent/10 to-accent/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center slide-up">
          <span className="text-sm font-medium text-orange-500 dark:text-orange-400 uppercase tracking-wider mb-3">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold relative">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-orange-500 dark:bg-orange-400 rounded-full mt-2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left column - Image */}
          <div className="lg:col-span-2 about-image">
            <div className="relative">
              {/* Image container with stylized border */}
              <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative">
                {/* Replace this with your actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                <Image
  src="/Ahmed.jpg"
  alt="Muritala Ahmed"
  layout="fill"
  objectFit="cover"
  placeholder="blur"
  blurDataURL="/Ahmed.jpg" 
  className="rounded-lg"
/>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-lg bg-orange-500/20 dark:bg-orange-400/20 -z-10 about-decoration"></div>
                <div className="absolute -top-3 -left-3 w-20 h-20 rounded-lg border-2 border-orange-500/30 dark:border-orange-400/30 -z-10 about-decoration"></div>
              </div>
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="about-who-i-am">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Who I Am
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="about-paragraph">
                  I'm a passionate Frontend Web Developer with a keen eye for design and a dedication to creating seamless user experiences. With several years of experience in the field, I've honed my skills in building responsive, accessible, and performant web applications.
                </p>
                <p className="about-paragraph">
                  My journey into web development began with a curiosity about how websites work, which quickly evolved into a passion for creating them. I'm constantly learning and adapting to new technologies and methodologies to ensure I deliver the best possible solutions.
                </p>
                <p className="about-paragraph">
                  When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="about-tech-stack">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                My Tech Stack
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <Card 
                    key={index} 
                    className="border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 transition-colors hover:shadow-md tech-item"
                  >
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <div className="text-orange-500 dark:text-orange-400 mb-3">
                        {tech.icon}
                        <span className="sr-only">{tech.name}</span>
                      </div>
                      <span className="font-medium">{tech.name}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Call to action */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 about-cta">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <div className="text-orange-500 dark:text-orange-400 font-bold text-lg">
                  Want to work together?
                </div>
                <a 
                  href="#contact" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;