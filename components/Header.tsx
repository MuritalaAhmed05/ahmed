"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./toggleBtn";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollRevealInitialized, setScrollRevealInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["home", "about", "projects", "experience", "contact"];
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * 0.2;

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
    if (typeof window === "undefined" || scrollRevealInitialized) return;

    const initializeScrollReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      const sr = ScrollReveal({
        origin: "top",
        distance: "20px",
        duration: 800,
        delay: 100,
        reset: false,
      });

      sr.reveal(".nav-logo", {
        delay: 200,
      });

      sr.reveal(".nav-item", {
        interval: 100,
      });

      sr.reveal(".mobile-menu", {
        origin: "right",
        distance: "40px",
      });

      setScrollRevealInitialized(true);

      return () => sr.destroy();
    };

    initializeScrollReveal();
  }, [scrollRevealInitialized]);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !mobileMenuOpen ||
      !scrollRevealInitialized
    )
      return;

    const initializeMobileMenuReveal = async () => {
      const ScrollReveal = (await import("scrollreveal")).default;
      const sr = ScrollReveal();
      sr.reveal(".mobile-nav-item", {
        origin: "right",
        distance: "20px",
        duration: 500,
        interval: 100,
      });

      return () => sr.destroy();
    };

    initializeMobileMenuReveal();
  }, [mobileMenuOpen, scrollRevealInitialized]);

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

  const scrollToSection = (id: any) => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 640 ? 70 : 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  const createActiveIndicator = (id: any) => {
    if (activeSection === id) {
      return (
        <div className="absolute -inset-1 -z-10 rounded-md bg-orange-100 dark:bg-orange-900/20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500 dark:bg-orange-400 animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-orange-500 dark:bg-orange-400 animate-pulse"></div>
          </div>
        </div>
      );
    }
    return null;
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: 20,
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6 md:px-9",
        isScrolled
          ? "bg-white/85 dark:bg-black/85 backdrop-blur-md py-3 sm:py-4 md:py-6 shadow-md"
          : "bg-transparent py-4 sm:py-5",
        mobileMenuOpen ? "bg-white/95 dark:bg-black/95" : ""
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="text-lg sm:text-xl md:text-2xl font-bold text-primary dark:text-orange-400 transition-all duration-300"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <span className="sr-only">Homepage</span>
          &lt;Ahmed is a Web Dev/&gt;
        </a>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
          {navLinks.map((link, index) => (
            <div
              key={link.label}
              className={`nav-item relative`}
              data-sr-id={`nav-${index}`}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={cn(
                  "text-sm font-medium transition-colors px-2 py-1 relative z-10",
                  activeSection === link.id
                    ? "text-orange-500 dark:text-orange-400 font-bold"
                    : "text-gray-700 dark:text-gray-300 hover:text-navy-800 dark:hover:text-orange-300"
                )}
              >
                {link.label}
                {createActiveIndicator(link.id)}
              </a>
            </div>
          ))}
          <div className="nav-item">
            <ModeToggle />
          </div>
        </nav>

        <button
          className="mobile-menu md:hidden text-foreground dark:text-gray-200 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 border-b border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.nav className="container flex flex-col py-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={itemVariants}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={cn(
                    "py-3 px-4 text-base font-medium transition-all duration-200 border-l-4",
                    activeSection === link.id
                      ? "border-orange-500 bg-gray-100/80 dark:bg-gray-900/60 text-orange-500 dark:text-orange-400"
                      : "border-transparent hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  )}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                variants={itemVariants}
                className="py-3 px-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-800 mt-2"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Toggle Theme
                </span>
                <ModeToggle />
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
