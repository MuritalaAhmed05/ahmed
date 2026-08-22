"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Building2, Calendar, ExternalLink, Briefcase, Award, CheckCircle2 } from "lucide-react";

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
        Building scalable modern web applications using Next.js, TypeScript, and modern UI engineering tools. Contributing to internal and client-facing digital products focused on speed, accessibility, and clean design.
      </>
    ),
    achievements: [
      "Spraditech is where I began my professional frontend journey—learning React, Next.js, TypeScript, and modern web tools",
      "Built and deployed multiple production websites for clients across diverse industries",
      "Collaborated closely with designers to convert Figma mockups into pixel-perfect UI with Tailwind CSS",
      "Optimized user experience by implementing interactive features and seamless page transitions"
    ],
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "React"],
    companyUrl: "https://spraditech.com"
  },
  {
    title: "Frontend Intern (Finalist)",
    company: "HNG Internship",
    location: "Remote",
    period: "Jan 2025 - Apr 2025",
    description: (
      <>
        Completed an intensive remote internship engineering real-world production platforms under fast-paced deadlines. Collaborated with multi-disciplinary teams to build and launch Gradific, a reward-based performance recognition platform.
      </>
    ),
    achievements: [
      "Emerged as a finalist out of thousands of global participants",
      "Built core responsive frontend interfaces and state-driven forms for Gradific platform",
      "Enhanced cross-functional teamwork across PMs, UI/UX designers, backend devs, and DevOps engineers",
      "Enforced type-safety and form validations with Zod and TanStack Query"
    ],
    skills: ["Next.js", "Zod", "TanStack Query", "Shadcn UI", "Team Collaboration"],
    companyUrl: "https://gradific.com"
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 md:py-16 relative overflow-hidden bg-gray-50/50 dark:bg-black/30">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-3 flex items-center gap-1.5">
            <Briefcase size={14} />
            CAREER TRAJECTORY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Work <span className="gradient-text-orange">Experience</span>
          </h2>
          {/* Signature Timeline Beam Underline */}
          <div className="flex items-center justify-center gap-2.5 mt-4 mb-4">
            <div className="w-10 h-0.5 bg-orange-500/60 rounded-full" />
            <div className="w-4 h-4 rounded-full border border-orange-500 bg-orange-500/10 flex items-center justify-center shadow-sm shadow-orange-500/30">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            </div>
            <div className="w-10 h-0.5 bg-orange-500/60 rounded-full" />
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">
            My professional journey in software development, showcasing key contributions, skills gained, and engineering impact.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-orange-500/30 space-y-12 ml-2 sm:ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-orange-500 border-4 border-background shadow-lg shadow-orange-500/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              </div>

              {/* Experience Card */}
              <Card className="glass-card glass-card-hover border-gray-200/60 dark:border-white/10 p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-gray-100 dark:border-white/5">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                        {exp.title}
                      </h3>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 hover:text-orange-600 p-1 rounded transition-colors"
                          title={`Visit ${exp.company}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground mt-1 font-mono">
                      <span className="flex items-center gap-1.5 text-orange-500 font-semibold">
                        <Building2 size={15} />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <>
                          <span>•</span>
                          <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-neutral-800 text-[11px]">
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <Badge className="w-fit bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 font-mono text-xs px-3 py-1">
                    {exp.period}
                  </Badge>
                </div>

                <CardContent className="p-0 space-y-4">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="space-y-2 pt-2">
                      <h4 className="text-xs font-mono font-bold text-orange-500 uppercase tracking-wider flex items-center gap-1.5">
                        <Award size={14} /> Key Highlights & Achievements:
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-neutral-800/80 text-foreground font-mono text-xs border border-gray-200/50 dark:border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Looking for detailed career history? Check my full{" "}
            <a
              href="/Muritala_Ahmed_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline font-bold"
            >
              Resume PDF
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;