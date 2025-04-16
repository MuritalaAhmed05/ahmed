"use client"
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useScrollAnimations } from '@/lib/animations';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  featured?: boolean;
}

const allProjects: ProjectProps[] = [
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
    description: "A demo shopping website built to test API integration skills. Users can view products and add them to the cart. Not fully functional.",
    technologies: ["NextJs", "TypeScript", "FakeStore Api", "Tailwind CSS"],
    liveUrl: "https://shop-ease-gamma.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/ShopEase",
    imageUrl: "/shopease.png",
    featured: true
  },
  {
    title: "Fancy Text",
    description: "A fun tool for generating fancy and stylish text with multiple creative styles for use in social media, designs, or projects.",
    technologies: ["NextJs", "Tailwind", "Rest Api"],
    liveUrl: "https://fancy-text-delta.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Fancy-Text",
    imageUrl: "/fancy.png",
    featured: true
  },
  {
    title: "Quran App",
    description: "A digital Quran reader with translation and search functionality.",
    technologies: ["NextJs", "Rest Api", "Tailwind CSS"],
    liveUrl: "https://quran-app-khaki.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Quran-app",
    imageUrl: "/quran-app-khaki.png",
    featured: true
  },
  {
    title: "E-Photo",
    description: "Enter any text and instantly generate a styled image using premade designs—ideal for quick creative outputs.",
    technologies: ["NextJs", "TypeScript", "Rest Api", "Tailwind"],
    liveUrl: "https://ephoto-kappa.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/ephoto",
    imageUrl: "/e-photo.png",
    featured: true
  },
  {
    title: "Flimzy",
    description: "A movie discovery app built during the HNG Internship using the TMDB API. Search, explore, and view details of trending films.",
    technologies: ["NextJs", "TypeScript", "TMBD Api", "Tailwind"],
    liveUrl: "https://flimzy.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/HNGx-stage8-movie-app",
    imageUrl: "/flimzy.png",
    featured: true
  },
  {
    title: "VidGrab",
    description: "A tool for downloading videos across social media platforms with format selection and batch processing.",
    technologies: ["NextJs", "Rest API", "Shadcn Ui" , "Tailwind CSS"],
    liveUrl: "https://social-media-tool-kohl.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/social-media-tool",
    imageUrl: "/localhost.png",
    featured: true
  },
  {
    title: "Quiz App",
    description: "An interactive app for taking quizzes to test your knowledge with scoring and progress tracking.",
    technologies: ["NextJS", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://brainstorm-lilac-three.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/brainstorm",
    imageUrl: "/quiz.png"
  },
  {
    title: "Meme Creator",
    description: "A fun tool for designing and sharing your own memes with ease, featuring text overlays and templates.",
    technologies: ["NextJS", "Rest API", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://meme-creator-eta.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/meme-creator",
    imageUrl: "/mem.png"
  },
  {
    title: "Entertain Me",
    description: "Generate all kinds of fun content—jokes, flirts, insults, riddles, truth or dare challenges, and more—perfect for laughs and good vibes.",
    technologies: ["NextJS", "Rest API", "Tailwind CSS"],
    liveUrl: "https://entertain-me-lime.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/EntertainMe",
    imageUrl: "/entertain.png"
  },
 
  {
    title: "WebFullshot",
    description: "A powerful tool for capturing full-page website screenshots effortlessly with sharing capabilities.",
    technologies: ["NextJs", "Rest API", "Tailwind CSS"],
    liveUrl: "https://webshot-six.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/webshot",
    imageUrl: "/webshot.png"
  },
  {
    title: "Prayer Time",
    description: "An app that lets you input your location to get accurate daily prayer times.",
    technologies: ["NextJs", "Rest API", "TypeScript"],
    liveUrl: "https://prayer-time-umber.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/prayer-time",
    imageUrl: "/prayer.png"
  },
  
  {
    title: "Portfolio Showcase",
    description: "This is my portfolio where I showcase my personal and professional projects, with filters to explore by category.",
    technologies: ["React", "Tailwind CSS", "AOS", "JavaScript"],
    liveUrl: "https://portfolio-psi-taupe-53.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Portfolio",
    imageUrl: "/portfolio-psi-taupe-53.png"
  },
  {
    title: "URL Shortener",
    description: "A simple tool to shorten long URLs—just paste your link and get a short version instantly.",
    technologies: ["NextJs", "Tiny Url API", "Tailwind CSS"],
    liveUrl: "https://url-shortener-azure-theta.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/url-shortener",
    imageUrl: "/url-shortener.png"
  },
 
  {
    title: "Lyrics Finder",
    description: "Discover song lyrics with a clean and intuitive interface and artist information.",
    technologies: ["React", "Lyrics API", "Tailwind CSS"],
    liveUrl: "https://lyrics-finder-six.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/lyrics-finder",
    imageUrl: "/lyrics-finder-six.png"
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes for any URL/Text with seamless functionality and customization options.",
    technologies: ["React", "QR Code API", "Tailwind CSS", ],
    liveUrl: "https://qr-code-generator-flame-sigma.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/qr-code-generator",
    imageUrl: "/qr-code-generator-flame-sigma.png"
  },
  {
    title: "Currency Converter",
    description: "Convert between currencies with real-time exchange rates and historical data.",
    technologies: ["NextJS", "Exchange Rate API", "Tailwind CSS"],
    liveUrl: "https://currency-converter-wine-nu.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/currency-converter",
    imageUrl: "/currency-converter-wine-nu.png"
  },
  {
    title: "Weather App",
    description: "Accurate and up-to-date weather information with forecasting and location services.",
    technologies: ["NextJs", "Weather API", "Tailwind CSS", "Geolocation"],
    liveUrl: "https://weather-app-tau-mocha.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/weather-app",
    imageUrl: "/weather-app-tau-mocha.png",
    featured: true
  },
  {
    title: "Timbu Shop",
    description: "A basic e-commerce demo focused on UI/UX and product display, without API integration.",
    technologies: ["React", "Vanilla CSS"],
    liveUrl: "https://timbu-shop-kappa.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Timbu_Shop",
    imageUrl: "/timbu-shop-kappa.png"
  },
  {
    title: "Analog Clock",
    description: "A minimalist analog clock application with a sleek design and time zone support.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://analog-clock-two-chi.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Analog-Clock",
    imageUrl: "/analog-clock-two-chi.png"
  },
  {
    title: "Crush Message",
    description: "Send cute love notes to your crush without saying it out loud—simple, sweet, and indirect.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://crush-message-qgzt.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/crush_message",
    imageUrl: "/crush-message.png"
  },
  {
    title: "Calculator App",
    description: "A basic clone of the default phone calculator for quick and easy calculations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://calc-eta-umber.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/calculator",
    imageUrl: "/calc-eta-umber.png"
  },
  {
    title: "Chat App",
    description: "An interactive real-time chat application with user profiles.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://chat-app-nine-red.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/ChatApp",
    imageUrl: "/chat-app-nine-red.png",
    featured: true
  },
  {
    title: "Ticket Generator",
    description: "A simple tool for generating custom conference tickets by filling a form with your details and uploading a photo.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://hngx-stage2-conference-ticket-generator.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/HNGx-stage2-Conference-ticket-generator",
    imageUrl: "/ticket-gen.png",
    featured: true
  },
  {
    title: "Password Fun",
    description: "A playful password typing experience with dynamic GIF animations to liven up your login process.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://fun-password.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/fun-password",
    imageUrl: "/password-fun.png",
    featured: true
  },
  {
    title: "Color Matching Game",
    description: "A simple and fun color guessing game built with HTML, CSS, and JavaScript for HNG Stage 1.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://color-matching-game-omega.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/HNGx-stage1-Color-Game",
    imageUrl: "/color-game.png",
    featured: true
  },
  {
    title: "To-Do List",
    description: "A simple and efficient to-do list app built with HTML, CSS, and JavaScript for managing tasks.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://to-do-list-two-beta-39.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/To-Do-list",
    imageUrl: "/todo.png",
    featured: true
  },
  {
    title: "Nexus Landing Page",
    description: "A sleek and modern landing page design created as a UI-focused project using Next.js, TypeScript, and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://nexus-fawn-rho.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/nexus",
    imageUrl: "/nexus.png",
    featured: true
  }
  
  
  
  
  
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="h-full overflow-hidden group border-gray-200 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-400 transition-colors duration-300 project-card">
      <div className="relative aspect-video w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 dark:bg-gray-800">
            <span className="text-sm">{project.imageUrl.replace('/', '')}</span>
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 project-image"
            />
           
          </div>
        </div>
        
        <div className="absolute bottom-2 left-2 right-2 z-20 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm text-xs project-badges">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-2 project-content">
        <CardTitle className="text-xl flex items-center gap-2">
          {project.title}
          {project.featured && (
            <Badge variant="outline" className="ml-2 border-orange-500 text-orange-500 dark:border-orange-400 dark:text-orange-400">
              Featured
            </Badge>
          )}
        </CardTitle>
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
      </CardHeader>
      
      <CardFooter className="flex justify-between pt-0 project-footer">
        <Button variant="outline" size="sm" asChild className="border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 dark:hover:border-orange-400 dark:hover:text-orange-400">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
            <Github size={16} />
            Code
          </a>
        </Button>
        <Button size="sm" asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5">
            <ExternalLink size={16} />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ProjectsPage = () => {
  const router = useRouter();
  useScrollAnimations()
  return (
    <>
      {/* Fixed back button */}
      <div className="fixed top-4 left-4 z-10">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => router.push('/#projects')} 
          className="flex items-center gap-2 hover:text-orange-500 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm rounded-full px-4 py-2"
        >
          <ArrowLeft size={16} />
          Back
        </Button>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A comprehensive collection of my web development work, showcasing my skills, creativity, and problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6 flex items-center">
          <Badge variant="outline" className="px-3 py-1">
            {allProjects.length} Projects
          </Badge>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 projects-grid">
          {allProjects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;