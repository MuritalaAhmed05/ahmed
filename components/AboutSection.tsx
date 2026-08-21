"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Database,
  Globe,
  Layout,
  Layers,
  Smartphone,
  Palette,
  Zap,
  Briefcase,
  Award,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const techStack = [
    { name: "Next.js", icon: <Globe className="h-6 w-6" />, category: "Framework" },
    { name: "TypeScript", icon: <Code className="h-6 w-6" />, category: "Language" },
    { name: "Tailwind CSS", icon: <Palette className="h-6 w-6" />, category: "Styling" },
    { name: "React", icon: <Layers className="h-6 w-6" />, category: "Frontend" },
    { name: "Firebase", icon: <Database className="h-6 w-6" />, category: "Backend/Auth" },
    { name: "Responsive", icon: <Smartphone className="h-6 w-6" />, category: "Mobile First" },
    { name: "UI/UX", icon: <Layout className="h-6 w-6" />, category: "Design Systems" },
    { name: "Performance", icon: <Zap className="h-6 w-6" />, category: "Optimization" },
  ];

  const highlights = [
    {
      icon: <Briefcase className="h-5 w-5 text-orange-500" />,
      title: "Work Experience",
      desc: "Frontend Dev at Spraditech",
    },
    {
      icon: <Award className="h-5 w-5 text-emerald-500" />,
      title: "HNG Finalist",
      desc: "Top performer among 10k+",
    },
    {
      icon: <Clock className="h-5 w-5 text-blue-500" />,
      title: "2+ Years Exp.",
      desc: "Building production apps",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      title: "28+ Projects",
      desc: "Live web applications",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-gray-50/50 dark:bg-black/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-3">
            GET TO KNOW ME
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="gradient-text-orange">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bento Grid Stats & Highlights (Replacing image) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card glass-card-hover p-5 rounded-2xl border border-white/20 dark:border-white/10 flex flex-col justify-between"
              >
                <div className="p-2.5 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 w-fit mb-3">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Quick Principles Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 glass-card p-6 rounded-2xl border border-white/20 dark:border-white/10 bg-gradient-to-br from-orange-500/5 to-amber-500/5"
            >
              <h4 className="font-bold text-sm text-orange-500 font-mono uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} /> Core Focus
              </h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Pixel-perfect UI & responsive design across all screen sizes
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  Fast loading speed & clean modular component architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  API integration, state management & accessible web standards
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Bio Text & Tech Stack */}
          <div className="lg:col-span-7 space-y-8">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-white/20 dark:border-white/10 shadow-lg shadow-black/5"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm a passionate <strong className="text-foreground">Frontend Web Developer</strong> with a keen eye for modern design and a commitment to creating seamless, accessible user experiences. With several years of active coding experience, I specialize in transforming complex design concepts into responsive, high-performance web applications.
                </p>
                <p>
                  My journey into software development started with a strong curiosity for how the web works, which quickly transformed into an enthusiasm for crafting interactive digital products. I am constantly expanding my expertise with modern frameworks and web standards.
                </p>
                <p>
                  Whether working with cross-functional teams at Spraditech or emerging as a finalist in the intensive HNG Internship, I bring precision, clean code principles, and effective communication to every project.
                </p>
              </div>
            </motion.div>

            {/* Tech Stack Matrix */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Code className="text-orange-500" size={20} />
                My Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="glass-card glass-card-hover border-gray-200/60 dark:border-white/10">
                      <CardContent className="flex flex-col items-center justify-center p-4 text-center">
                        <div className="text-orange-500 mb-2 p-2 rounded-xl bg-orange-500/10">
                          {tech.icon}
                        </div>
                        <span className="font-bold text-sm text-foreground">{tech.name}</span>
                        <span className="text-[10px] text-muted-foreground font-mono mt-0.5">{tech.category}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-orange-500/20">
              <div>
                <h4 className="text-lg font-bold">Have a project in mind?</h4>
                <p className="text-xs text-white/90">Let's build something extraordinary together.</p>
              </div>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-orange-600 hover:bg-gray-100 font-bold text-xs uppercase tracking-wider transition-all shadow-md text-center flex items-center justify-center gap-2 shrink-0"
              >
                <span>Get In Touch</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

