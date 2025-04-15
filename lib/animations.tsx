// "use client"
// import ScrollReveal from 'scrollreveal';

// export const scrollAnimations = () => {
//   const sr = ScrollReveal();

//   const defaultConfig = {
//     duration: 1000,
//     delay: 200,
//     distance: '20px',
//     easing: 'cubic-bezier(0.5, 0, 0, 1)',
//     reset: true,
//     mobile: true,
//   };

//   // General animations
//   sr.reveal('.slide-up', {
//     ...defaultConfig,
//     origin: 'bottom',
//   });

//   // Hero section animations
//   sr.reveal('.hero-role', {
//     duration: 1200,
//     delay: 800,
//     distance: '50px',
//     origin: 'right',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.hero-description', {
//     duration: 1000,
//     delay: 1000,
//     distance: '30px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.hero-buttons .button-item', {
//     duration: 800,
//     interval: 200,
//     distance: '20px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.hero-social a', {
//     duration: 1000,
//     interval: 150,
//     distance: '10px',
//     origin: 'top',
//     opacity: 0,
//     reset: true,
//     scale: 0.8,
//     beforeReveal: (el :any) => {
//       el.style.animation = 'bounce 1s ease 1';
//     }
//   });
  
//   sr.reveal('.hero-image', {
//     duration: 1500,
//     delay: 300,
//     scale: 0.8,
//     opacity: 0,
//     reset: true,
//     distance: '0px'
//   });
  
//   sr.reveal('.hero-decoration', {
//     duration: 1800,
//     delay: 500,
//     rotate: { x: 20, z: 10 },
//     opacity: 0,
//     reset: true,
//     scale: 0.5
//   });
  
//   sr.reveal('.scroll-down', {
//     duration: 1000,
//     delay: 1600,
//     distance: '50px',
//     origin: 'top',
//     opacity: 0,
//     reset: true,
//   });

//   // About section animations
//   sr.reveal('.about-image', {
//     duration: 1200,
//     delay: 300,
//     origin: 'left',
//     distance: '50px',
//     opacity: 0,
//     reset: true
//   });

//   sr.reveal('.about-decoration', {
//     duration: 1500,
//     delay: 600,
//     scale: 0.5,
//     opacity: 0,
//     reset: true,
//     rotate: { x: 0, y: 0, z: 5 }
//   });

//   sr.reveal('.about-who-i-am', {
//     duration: 1000,
//     delay: 400,
//     origin: 'right',
//     distance: '30px',
//     opacity: 0,
//     reset: true
//   });

//   sr.reveal('.about-paragraph', {
//     duration: 800,
//     distance: '20px',
//     origin: 'bottom',
//     opacity: 0,
//     interval: 200,
//     reset: true
//   });

//   sr.reveal('.about-tech-stack', {
//     duration: 1000,
//     delay: 600,
//     origin: 'bottom',
//     distance: '30px',
//     opacity: 0,
//     reset: true
//   });

//   sr.reveal('.tech-item', {
//     duration: 800,
//     interval: 100,
//     scale: 0.9,
//     distance: '10px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true
//   });

//   sr.reveal('.about-cta', {
//     duration: 1100,
//     delay: 800,
//     origin: 'bottom',
//     distance: '20px',
//     opacity: 0,
//     reset: true
//   });

//   // Add these animations to your existing scrollAnimations function

// // Projects section animations
// sr.reveal('.projects-header', {
//     duration: 1000,
//     delay: 200,
//     origin: 'bottom',
//     distance: '30px',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.projects-grid', {
//     duration: 800,
//     delay: 400,
//     opacity: 0,
//     distance: '20px',
//     origin: 'bottom',
//     reset: true
//   });
  
//   sr.reveal('.project-card', {
//     duration: 800,
//     interval: 200,
//     distance: '30px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true,
//     mobile: true
//   });
  
//   sr.reveal('.project-image', {
//     duration: 1200,
//     delay: 100,
//     scale: 0.9,
//     opacity: 0.8,
//     reset: true,
//     mobile: true
//   }, 100);
  
//   sr.reveal('.project-badges', {
//     duration: 700,
//     delay: 300,
//     distance: '10px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.project-content', {
//     duration: 800,
//     delay: 350,
//     distance: '20px',
//     origin: 'left',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.project-footer', {
//     duration: 800,
//     delay: 400,
//     distance: '20px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.projects-cta', {
//     duration: 1000,
//     delay: 700,
//     distance: '30px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true
//   });

//   // Add these animations to your existing scrollAnimations function

// // Experience section animations
// sr.reveal('.experience-header', {
//     duration: 1000,
//     delay: 200,
//     distance: '30px',
//     origin: 'top',
//     opacity: 0,
//     reset: true
//   });
  
//   // Since you're already using Framer Motion for card animations,
//   // we'll add subtle additional effects with ScrollReveal that complement
//   // rather than override the motion animations
  
//   sr.reveal('.experience-timeline', {
//     duration: 1500,
//     delay: 300,
//     distance: '0px',
//     origin: 'top',
//     scale: 1,
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.experience-dot', {
//     duration: 800,
//     delay: 300,
//     scale: 0.5,
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.experience-title', {
//     duration: 800,
//     delay: 400,
//     distance: '20px',
//     origin: 'left',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.experience-company', {
//     duration: 800,
//     delay: 500,
//     distance: '20px',
//     origin: 'left',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.experience-badge', {
//     duration: 800,
//     delay: 600,
//     distance: '10px',
//     origin: 'right',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.experience-description', {
//     duration: 800,
//     delay: 700,
//     distance: '20px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.experience-achievements', {
//     duration: 800,
//     delay: 800,
//     distance: '20px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.achievement-item', {
//     duration: 800,
//     interval: 150,
//     distance: '10px',
//     origin: 'left',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.experience-skills', {
//     duration: 800,
//     delay: 900,
//     distance: '20px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.skill-badge', {
//     duration: 600,
//     interval: 100,
//     scale: 0.8,
//     opacity: 0,
//     reset: true
//   });
  
//   sr.reveal('.experience-footer', {
//     duration: 1000,
//     delay: 1000,
//     distance: '30px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true
//   });
//   // Add this to your scrollAnimations.ts file

// // Contact section animations
// sr.reveal('.contact-heading', {
//     duration: 1200,
//     origin: 'top',
//     distance: '30px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-divider', {
//     duration: 1000,
//     delay: 200,
//     scale: 0.5,
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-description', {
//     duration: 1100,
//     delay: 300,
//     origin: 'bottom',
//     distance: '20px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-form-container', {
//     duration: 1300,
//     delay: 300,
//     origin: 'left',
//     distance: '50px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-form-item', {
//     duration: 800,
//     interval: 150,
//     origin: 'bottom',
//     distance: '20px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-info-container', {
//     duration: 1300,
//     delay: 400,
//     origin: 'right',
//     distance: '50px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-heading-secondary', {
//     duration: 1000,
//     delay: 300,
//     origin: 'top',
//     distance: '20px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.social-link-item', {
//     duration: 800,
//     interval: 100,
//     scale: 0.9,
//     distance: '10px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-info-card', {
//     duration: 1200,
//     delay: 500,
//     scale: 0.95,
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-info-item', {
//     duration: 800,
//     interval: 150,
//     origin: 'right',
//     distance: '20px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-info-divider', {
//     duration: 1000,
//     delay: 800,
//     scale: 0.8,
//     opacity: 0,
//     reset: true,
//   });
//   sr.reveal('.contact-heading', {
//     duration: 1200,
//     origin: 'top',
//     distance: '30px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-divider', {
//     duration: 1000,
//     delay: 200,
//     scale: 0.5,
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-description', {
//     duration: 1100,
//     delay: 300,
//     origin: 'bottom',
//     distance: '20px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-form-container', {
//     duration: 1300,
//     delay: 300,
//     origin: 'left',
//     distance: '50px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-form-item', {
//     duration: 800,
//     interval: 150,
//     origin: 'bottom',
//     distance: '20px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-info-container', {
//     duration: 1300,
//     delay: 400,
//     origin: 'right',
//     distance: '50px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-heading-secondary', {
//     duration: 1000,
//     delay: 300,
//     origin: 'top', 
//     distance: '20px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.social-link-item', {
//     duration: 800,
//     interval: 100,
//     scale: 0.9,
//     distance: '10px',
//     origin: 'bottom',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-info-card', {
//     duration: 1200,
//     delay: 500,
//     scale: 0.95,
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-info-item', {
//     duration: 800,
//     interval: 150,
//     origin: 'right',
//     distance: '20px',
//     opacity: 0,
//     reset: true,
//   });
  
//   sr.reveal('.contact-info-divider', {
//     duration: 1000,
//     delay: 800,
//     scale: 0.8,
//     opacity: 0,
//     reset: true,
//   });
// };