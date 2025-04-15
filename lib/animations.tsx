"use client";
import { useEffect } from 'react';

export const useScrollAnimations = () => {
  useEffect(() => {
    // Don't run on server
    if (typeof window === 'undefined') return;

    // Dynamically import ScrollReveal only on client
    import('scrollreveal').then((module) => {
      const ScrollReveal = module.default;
      const sr = ScrollReveal();

      const defaultConfig = {
        duration: 1000,
        delay: 200,
        distance: '20px',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true,
        mobile: true,
      };

      // General animations
      sr.reveal('.slide-up', {
        ...defaultConfig,
        origin: 'bottom',
      });

      // Hero section animations
      sr.reveal('.hero-role', {
        duration: 1200,
        delay: 800,
        distance: '50px',
        origin: 'right',
        opacity: 0,
        reset: true,
      });
      
      sr.reveal('.hero-description', {
        duration: 1000,
        delay: 1000,
        distance: '30px',
        origin: 'bottom',
        opacity: 0,
        reset: true,
      });
      
      sr.reveal('.hero-buttons .button-item', {
        duration: 800,
        interval: 200,
        distance: '20px',
        origin: 'bottom',
        opacity: 0,
        reset: true,
      });
      
      sr.reveal('.hero-social a', {
        duration: 1000,
        interval: 150,
        distance: '10px',
        origin: 'top',
        opacity: 0,
        reset: true,
        scale: 0.8,
        beforeReveal: (el:HTMLElement) => {
          el.style.animation = 'bounce 1s ease 1';
        }
      });
      
      sr.reveal('.hero-image', {
        duration: 1500,
        delay: 300,
        scale: 0.8,
        opacity: 0,
        reset: true,
        distance: '0px'
      });
      
      sr.reveal('.hero-decoration', {
        duration: 1800,
        delay: 500,
        rotate: { x: 20, z: 10 },
        opacity: 0,
        reset: true,
        scale: 0.5
      });
      
      sr.reveal('.scroll-down', {
        duration: 1000,
        delay: 1600,
        distance: '50px',
        origin: 'top',
        opacity: 0,
        reset: true,
      });

      // Cleanup function
      return () => {
        sr.destroy();
      };
    });
  }, []);
};