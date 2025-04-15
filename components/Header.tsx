"use client";
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './toggleBtn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollRevealInitialized, setScrollRevealInitialized] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
  
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
  
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
  
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section);
          break;
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || scrollRevealInitialized) return;

    const initializeScrollReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;
      const sr = ScrollReveal({
        origin: 'top',
        distance: '20px',
        duration: 800,
        delay: 100,
        reset: false
      });

      sr.reveal('.nav-logo', { 
        delay: 200 
      });
      
      sr.reveal('.nav-item', { 
        interval: 100 
      });
      
      sr.reveal('.mobile-menu', { 
        origin: 'right',
        distance: '40px'
      });

      setScrollRevealInitialized(true);
      
      return () => sr.destroy();
    };

    initializeScrollReveal();
  }, [scrollRevealInitialized]);

  useEffect(() => {
    if (typeof window === 'undefined' || !mobileMenuOpen || !scrollRevealInitialized) return;

    const initializeMobileMenuReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;
      const sr = ScrollReveal();
      sr.reveal('.mobile-nav-item', { 
        origin: 'right', 
        distance: '20px', 
        duration: 500, 
        interval: 100 
      });

      return () => sr.destroy();
    };

    initializeMobileMenuReveal();
  }, [mobileMenuOpen, scrollRevealInitialized]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (id: any) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 8,
        behavior: 'smooth'
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

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-9",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 sm:py-6 shadow-md"
          : "bg-transparent py-5",
          mobileMenuOpen ? "bg-white dark:bg-black/80" : ""
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl sm:text-2xl font-bold text-primary dark:text-orange-400 nav-logo"
        >
          <span className="sr-only">Homepage</span>
          &lt;Ahmed is a Web Dev/&gt;
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={link.label} className={`nav-item relative`} data-sr-id={`nav-${index}`}>
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
          <ModeToggle/>
        </nav>

        <button
          className="mobile-menu md:hidden text-foreground dark:text-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black/80 border-b border-border shadow-lg">
           <nav className="container flex flex-col py-4">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={cn(
                  "mobile-nav-item py-3 px-4 text-base font-medium transition-all duration-300 border-l-4",
                  activeSection === link.id 
                    ? "border-orange-500 bg-gray-100 dark:bg-black text-orange-500 dark:text-orange-400" 
                    : "border-transparent hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                )}
                data-sr-id={`mobile-nav-${index}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;