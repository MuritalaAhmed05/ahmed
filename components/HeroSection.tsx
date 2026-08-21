"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDownCircle,
  Github,
  Linkedin,
  Twitter,
  FileText,
  Code2,
  Terminal,
  Sparkles,
  Check,
  Copy,
  ExternalLink,
  Laptop,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "stats">("code");

  const copySnippet = () => {
    const code = `const developer = {
  name: "Muritala Ahmed",
  role: "Frontend Engineer",
  location: "Lagos, Nigeria",
  stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Firebase"],
  status: "Available for new projects 🚀"
};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/15 dark:bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-500/15 dark:bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 text-xs font-semibold text-orange-600 dark:text-orange-400 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Hire & Freelance</span>
            </div>

            {/* Main Greeting & Name */}
            <p className="text-sm sm:text-base font-mono text-orange-500 font-semibold mb-2 tracking-wide">
              Hello world 👋, I'm
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3">
              Muritala <span className="gradient-text-orange">Ahmed</span>
            </h1>

            {/* Role Header */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-200 mb-6 flex items-center gap-3">
              Frontend Web Developer
              <span className="hidden sm:inline-block w-2.5 h-8 bg-orange-500 rounded-full animate-pulse" />
            </h2>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl leading-relaxed">
              I build exceptional, high-performance, and accessible web experiences using modern technologies like Next.js, React, TypeScript, and Tailwind CSS.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-lg shadow-orange-500/25 rounded-xl px-6 py-6 transition-all hover:scale-[1.02]"
              >
                <a href="#projects" className="flex items-center gap-2">
                  <Laptop size={18} />
                  View My Work
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="glass-card hover:bg-gray-100 dark:hover:bg-neutral-800 text-foreground border-gray-300 dark:border-white/10 font-semibold rounded-xl px-6 py-6 transition-all hover:scale-[1.02]"
              >
                <a
                  href="/Muritala_Ahmed_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText size={18} className="text-orange-500" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground mr-1">Socials:</span>
              <a
                href="https://github.com/MuritalaAhmed05"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl glass-card text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/40 transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-dahdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl glass-card text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/40 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/ahmeddahdev?s=09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="p-2.5 rounded-xl glass-card text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:border-orange-500/40 transition-all duration-200"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Developer Studio Sandbox (No Profile Picture) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Decorative Ambient Floating Chips */}
            <div className="absolute -top-6 -right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono shadow-md animate-float">
              <Zap size={14} className="fill-current" />
              <span>Next.js 15 + React 19</span>
            </div>

            <div className="absolute -bottom-6 -left-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card border border-orange-500/30 text-orange-600 dark:text-orange-400 text-xs font-mono shadow-md animate-float" style={{ animationDelay: "2s" }}>
              <Code2 size={14} />
              <span>Tailwind CSS v4</span>
            </div>

            {/* Terminal Window Card */}
            <div className="glass-card rounded-2xl border border-white/20 dark:border-white/10 overflow-hidden shadow-2xl shadow-orange-500/10">
              {/* Terminal Title Bar */}
              <div className="bg-gray-100/90 dark:bg-neutral-900/90 px-4 py-3 border-b border-gray-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                    <Terminal size={13} className="text-orange-500" />
                    ahmed.config.ts
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                      activeTab === "code"
                        ? "bg-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setActiveTab("stats")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                      activeTab === "stats"
                        ? "bg-orange-500/20 text-orange-600 dark:text-orange-400 font-semibold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Metrics
                  </button>
                  <button
                    onClick={copySnippet}
                    className="p-1 rounded hover:bg-gray-200 dark:hover:bg-neutral-800 text-muted-foreground hover:text-foreground transition-colors ml-1"
                    title="Copy snippet"
                  >
                    {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[300px] flex flex-col justify-between bg-white/40 dark:bg-black/50">
                {activeTab === "code" ? (
                  <div className="space-y-2">
                    <div>
                      <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                      <span className="text-blue-600 dark:text-blue-400">developer</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-red-500 dark:text-red-400">name</span>:{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"Muritala Ahmed"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-red-500 dark:text-red-400">role</span>:{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"Frontend Web Developer"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-red-500 dark:text-red-400">location</span>:{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"Lagos, Nigeria"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-red-500 dark:text-red-400">experience</span>:{" "}
                      <span className="text-amber-500 dark:text-amber-300">"2+ Years Professional"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-red-500 dark:text-red-400">skills</span>: [
                      <span className="text-emerald-600 dark:text-emerald-300">"Next.js"</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"React"</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"TypeScript"</span>,{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"Tailwind"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-red-500 dark:text-red-400">status</span>:{" "}
                      <span className="text-emerald-600 dark:text-emerald-300">"Ready for impact 🚀"</span>
                    </div>
                    <div>&#125;;</div>
                  </div>
                ) : (
                  <div className="space-y-4 py-2">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-white/10">
                      <span className="text-muted-foreground">Projects Delivered</span>
                      <span className="font-bold text-orange-500 text-base">28+ Works</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-white/10">
                      <span className="text-muted-foreground">HNG Internship</span>
                      <span className="font-bold text-emerald-500 text-base">Finalist</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200 dark:border-white/10">
                      <span className="text-muted-foreground">Company Experience</span>
                      <span className="font-bold text-blue-500 text-base">Spraditech</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Code Quality</span>
                      <span className="font-bold text-amber-500 text-base">Pixel-Perfect</span>
                    </div>
                  </div>
                )}

                {/* Footer status line */}
                <div className="mt-6 pt-3 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={12} className="text-orange-500" />
                    Clean & Modern Architecture
                  </span>
                  <span className="text-emerald-500 font-medium">100% Responsive</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Down Indicator */}
      <div className="flex justify-center mt-12 sm:mt-16">
        <a
          href="#about"
          aria-label="Scroll down to About section"
          className="group flex flex-col items-center text-xs font-mono text-muted-foreground hover:text-orange-500 transition-colors"
        >
          <span className="mb-1">SCROLL DOWN</span>
          <ArrowDownCircle size={24} className="group-hover:translate-y-1 transition-transform text-orange-500" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

