"use client";
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Sparkles, FolderGit2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
    description: "A demo shopping website built to test API integration skills. Users can view products and add them to the cart.",
    technologies: ["Next.js", "TypeScript", "FakeStore API", "Tailwind CSS"],
    liveUrl: "https://shop-ease-gamma.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/ShopEase",
    imageUrl: "/shopease.png",
    featured: true
  },
  {
    title: "Fancy Text",
    description: "A fun tool for generating fancy and stylish text with multiple creative styles for social media & designs.",
    technologies: ["Next.js", "Tailwind CSS", "REST API"],
    liveUrl: "https://fancy-text-delta.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Fancy-Text",
    imageUrl: "/fancy.png",
    featured: true
  },
  {
    title: "Quran App",
    description: "A digital Quran reader with translation, audio features, and fast search functionality.",
    technologies: ["Next.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://quran-app-khaki.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Quran-app",
    imageUrl: "/quran-app-khaki.png",
    featured: true
  },
  {
    title: "E-Photo",
    description: "Enter any text and instantly generate styled images using premade designs—ideal for quick creative outputs.",
    technologies: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    liveUrl: "https://ephoto-kappa.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/ephoto",
    imageUrl: "/e-photo.png",
    featured: true
  },
  {
    title: "Flimzy",
    description: "A movie discovery app built during the HNG Internship using TMDB API. Search, explore, and view trending films.",
    technologies: ["Next.js", "TypeScript", "TMDB API", "Tailwind CSS"],
    liveUrl: "https://flimzy.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/HNGx-stage8-movie-app",
    imageUrl: "/flimzy.png",
    featured: true
  },
];

const ProjectCard = ({ project, index }: { project: ProjectProps; index: number }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="glass-card glass-card-hover h-full flex flex-col justify-between overflow-hidden group border border-gray-200/60 dark:border-white/10 rounded-2xl">
        <div>
          {/* Card Image Container */}
          <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
            <Image
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

            {/* Badges Overlay */}
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-orange-500/90 hover:bg-orange-600 text-white font-mono text-[10px] uppercase tracking-wider backdrop-blur-md px-2.5 py-1">
                Featured Work
              </Badge>
            </div>

            <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap gap-1.5">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md bg-black/70 text-white/90 backdrop-blur-md text-[11px] font-mono border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card Header & Content */}
          <CardHeader className="p-5 pb-2">
            <CardTitle className="text-xl font-bold tracking-tight text-foreground group-hover:text-orange-500 transition-colors">
              {project.title}
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed mt-1">
              {project.description}
            </CardDescription>
          </CardHeader>
        </div>

        {/* Card Footer Actions */}
        <CardFooter className="p-5 pt-3 flex items-center justify-between border-t border-gray-100 dark:border-white/5 mt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            <Github size={16} />
            <span>Code</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 transition-all hover:scale-105"
          >
            <span>Live Demo</span>
            <ExternalLink size={14} />
          </a>
        </CardFooter>
      </Card>
    </motion.article>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden bg-gray-50/30 dark:bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-3 flex items-center gap-1.5">
            <FolderGit2 size={14} />
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="gradient-text-orange">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-4 mb-4" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            A curated selection of modern web applications showcasing full-stack integration, responsive layout engineering, and API design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-16 flex justify-center">
          <Link href="/projects" passHref>
            <Button
              size="lg"
              className="group glass-card hover:bg-orange-500 hover:text-white text-foreground border-orange-500/30 font-bold rounded-xl px-8 py-6 shadow-lg transition-all hover:scale-105"
            >
              <span>Explore All 28+ Projects</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;