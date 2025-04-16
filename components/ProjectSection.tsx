"use client"
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimations } from '@/lib/animations';


interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  featured?: boolean;
}

const projects: ProjectProps[] = [
  {
    title: "Dynamic Illuminations",
    description: "A modern website for a solar and inverter installation company, showcasing services and solutions for sustainable energy.",
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://dynamicilluminations.com.ng/",
    githubUrl: "https://github.com/MuritalaAhmed05/Dynamic-illuminations-",
    imageUrl: "/dynamicilluminations.png",
    featured: true
  },
  {
    title: "ShopEase",
    description: "A demo shopping website built to test API integration skills. Users can view products and add them to the cart. Not fully functional.",
    technologies: ["NextJs", "TypeScript", "FakeStore Api", "Tailwind CSS"],
    liveUrl: "https://shop-ease-gamma.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/ShopEase",
    imageUrl: "/shopease.png",
    featured: true
  },
  {
    title: "Fancy Text",
    description: "A fun tool for generating fancy and stylish text with multiple creative styles for use in social media, designs, or projects.",
    technologies: ["NextJs", "Tailwind", "Rest Api"],
    liveUrl: "https://fancy-text-delta.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Fancy-Text",
    imageUrl: "/fancy.png",
    featured: true
  },
  {
    title: "Quran App",
    description: "A digital Quran reader with translation and search functionality.",
    technologies: ["NextJs", "Rest Api", "Tailwind CSS"],
    liveUrl: "https://quran-app-khaki.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Quran-app",
    imageUrl: "/quran-app-khaki.png",
    featured: true
  },
  {
    title: "E-Photo",
    description: "Enter any text and instantly generate a styled image using premade designs—ideal for quick creative outputs.",
    technologies: ["NextJs", "TypeScript", "Rest Api", "Tailwind"],
    liveUrl: "https://ephoto-kappa.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/ephoto",
    imageUrl: "/e-photo.png",
    featured: true
  },
  {
    title: "Flimzy",
    description: "A movie discovery app built during the HNG Internship using the TMDB API. Search, explore, and view details of trending films.",
    technologies: ["NextJs", "TypeScript", "TMBD Api", "Tailwind"],
    liveUrl: "https://flimzy.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/HNGx-stage8-movie-app",
    imageUrl: "/flimzy.png",
    featured: true
  },
];


const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <article>
      <Card className="h-full overflow-hidden group border-gray-200 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-400 transition-colors duration-300 project-card">
        <div className="relative aspect-video w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
          <div className="w-full h-full bg-gray-200 dark:bg-gray-800 relative">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 dark:bg-gray-800">
              <span className="text-sm">{project.imageUrl.replace('/', '')}</span>
              <Image
                src={project.imageUrl}
                alt={`Screenshot of ${project.title} project`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 project-image"
              />
      
            </div>
          </div>
      
          <div className="absolute bottom-2 left-2 right-2 z-20 flex flex-wrap gap-1.5 project-badges">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      
        <CardHeader className="pb-2 project-content">
          <CardTitle className="text-xl flex items-center gap-2">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>
      
        <CardFooter className="flex justify-between pt-0 project-footer">
          <Button variant="outline" size="sm" asChild className="border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-400 dark:hover:text-orange-400">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              <Github size={16} />
              Code
            </a>
          </Button>
          <Button size="sm" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </article>
  );
};

const ProjectsSection = () => {
  useScrollAnimations();

  
  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50 dark:bg-black/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12 projects-header">
          <span className="text-sm font-medium text-orange-500 dark:text-orange-400 uppercase tracking-wider mb-3">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-orange-500 dark:bg-orange-400 rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            A showcase of my best work, demonstrating my skills and expertise in web development.
            Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 projects-grid">
          {projects
            .filter(project => project.featured)
            .slice(0, 6)
            .map((project, index) => (
              <div key={index}>
                <ProjectCard project={project} />
              </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center projects-cta">
          <Link href="/projects" passHref>
            <Button size="lg" className="group bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white">
              View All Projects
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;