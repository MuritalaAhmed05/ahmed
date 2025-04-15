"use client";
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useAnimation, useInView } from "framer-motion";
import { Building, Calendar, ExternalLink } from "lucide-react";
import { useScrollAnimations } from '@/lib/animations';

interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: React.ReactNode;
  achievements?: string[];
  skills: string[];
  companyUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Spraditech",
    location: "Lagos, Nigeria",
    period: "2023 - Present",
    description: (
      <>
        Working on modern web applications using Next.js, TypeScript, and other frontend tools. Contributed to multiple internal and client-facing projects with a focus on performance and accessibility.
      </>
    ),
    achievements: [
    "Spraditech is where I began my web development journey—learnt React, Next.js, TypeScript, and modern frontend tools.",
"Built and maintained multiple production-level websites for clients across different industries",
"Worked closely with designers to bring pixel-perfect UI to life using Tailwind CSS and component libraries",
"Improved user experience by implementing dynamic features and seamless navigation"

    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    companyUrl: "https://spraditech.com"
  },
  {
    title: "Frontend Intern (Finalist)",
    company: "HNG Internship",
    location: "Remote",
    period: "Jan 2025 - Apr 2025",
    description: (
      <>
        Completed an intensive remote internship focused on real-world web development. Collaborated with a team to build and launch Gradific, a reward-based performance recognition platform. Emerged as one of the finalists among thousands of participants.
      </>
    ),
    achievements: [
      "Built key features for the Gradific platform",
"Learned teamwork and collaboration across frontend, backend, PM, DevOps, and design teams",
"Improved test coverage by implementing unit and integration tests"

    ],
    skills: ["NextJs", "Zod", "TanStack Query", "Team Collaboration", "Shadcn UI"],
    companyUrl: "https://gradific.com"
  },
];

const ExperienceCard = ({ experience, index, isLast }: { experience: ExperienceItem, index: number, isLast: boolean }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay: index * 0.2 }
        }
      }}
      className="experience-card"
    >
      <Card className="relative overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
        {!isLast && (
          <div className="absolute h-full w-0.5 bg-orange-200 dark:bg-orange-900/30 left-[28px] top-[76px] z-10 experience-timeline"></div>
        )}
        
        <div className="absolute w-6 h-6 rounded-full bg-orange-500 left-6 top-[60px] z-20 shadow-md shadow-orange-200 dark:shadow-orange-900/20 experience-dot"></div>
        
        
        <div className="ml-16">
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <CardTitle className="text-xl text-gray-900 dark:text-gray-100 flex items-center gap-2 experience-title">
                  {experience.title}
                  {experience.companyUrl && (
                    <a 
                      href={experience.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </CardTitle>
                <div className="flex flex-col mt-1 space-y-1 experience-company">
                  <CardDescription className="flex items-center gap-1.5 text-gray-600 dark:text-gray-300">
                    <Building size={14} className="text-orange-500" />
                    {experience.company}
                  </CardDescription>
                  
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="text-orange-500" />
                    {experience.period}
                    {experience.location && (
                      <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800">
                        {experience.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <Badge 
                variant="outline" 
                className="sm:self-start border-orange-200 dark:border-orange-900/30 text-orange-700 dark:text-orange-400 font-medium experience-badge"
              >
                {experience.period}
              </Badge>
            </div>
          </CardHeader>
          
          <CardContent className="pt-2">
            <div className="text-gray-600 dark:text-gray-300 mb-4 experience-description">{experience.description}</div>
            
            {experience.achievements && experience.achievements.length > 0 && (
              <div className="mb-4 experience-achievements">
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {experience.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 achievement-item">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mt-3 experience-skills">
              {experience.skills.map((skill, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary"
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors skill-badge"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};

const ExperienceSection = () => {
  useScrollAnimations();

  return (
    <section id="experience" className="py-16 md:py-12 bg-gray-50 dark:bg-black/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center experience-header">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">Work Experience</h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-center md:text-left mb-8">
            My professional journey in web development, showcasing my growth and contributions to various projects and organizations.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (

            <ExperienceCard 
              key={index} 
              experience={exp} 
              index={index} 
              isLast={index === experiences.length - 1} 
            />
            
          ))}
        </div>
        
        <div className="mt-12 text-center experience-footer">
          <p className="text-gray-600 dark:text-gray-300 italic">
            For a complete overview of my professional experience, please check my{" "}
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors font-medium"
            >
              resume
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;