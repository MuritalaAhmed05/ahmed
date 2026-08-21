"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Sparkles, Code2 } from "lucide-react";
import { ModeToggle } from "./toggleBtn";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "about", "projects", "experience", "contact"];
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.25;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= threshold && rect.bottom >= threshold) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.25, staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div
        className={cn(
          "max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between",
          isScrolled
            ? "glass-card shadow-lg shadow-black/5 dark:shadow-orange-500/5 backdrop-blur-xl border border-white/20 dark:border-white/10"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
          className="group flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-foreground transition-all"
        >
          <div className="w-9 h-9 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
            <Code2 size={20} />
          </div>
          <span className="font-mono sm:text-xl text-sm">
            <span className="text-orange-500 font-extrabold">&lt;</span>
            Ahmed is a Web Dev
            <span className="text-orange-500 font-extrabold"> /&gt;</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/70 dark:bg-neutral-900/60 p-1.5 rounded-full border border-gray-200/50 dark:border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={cn(
                  "relative px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-200",
                  isActive
                    ? "text-white font-semibold shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full -z-10 shadow-sm shadow-orange-500/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white border border-orange-500/30 transition-all duration-200"
            >
              <Sparkles size={14} />
              Let's Talk
            </a>
          </div>

          <ModeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden max-w-6xl mx-auto mt-2 p-4 glass-card rounded-2xl border border-white/20 dark:border-white/10 shadow-xl"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.label}
                    variants={itemVariants}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={cn(
                      "px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between",
                      isActive
                        ? "bg-orange-500 text-white font-semibold"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
                    )}
                  >
                    {link.label}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  </motion.a>
                );
              })}
              <div className="pt-3 mt-2 border-t border-gray-200 dark:border-neutral-800 flex items-center justify-between px-2">
                <span className="text-xs text-muted-foreground font-mono">Status: Open for opportunities</span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

