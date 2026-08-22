"use client";
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft, Search, FolderGit2, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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
    description: "A demo shopping website built to test API integration skills. Users can view products and add them to the cart.",
    technologies: ["Next.js", "TypeScript", "FakeStore API", "Tailwind CSS"],
    liveUrl: "https://shop-ease-gamma.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/ShopEase",
    imageUrl: "/shopease.png",
    featured: true
  },
  {
    title: "Fancy Text",
    description: "A fun tool for generating fancy and stylish text with multiple creative styles for social media & designs.",
    technologies: ["Next.js", "Tailwind CSS", "REST API"],
    liveUrl: "https://fancy-text-delta.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Fancy-Text",
    imageUrl: "/fancy.png",
    featured: true
  },
  {
    title: "Quran App",
    description: "A digital Quran reader with translation, audio features, and fast search functionality.",
    technologies: ["Next.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://quran-app-khaki.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Quran-app",
    imageUrl: "/quran-app-khaki.png",
    featured: true
  },
  {
    title: "E-Photo",
    description: "Enter any text and instantly generate styled images using premade designs—ideal for quick creative outputs.",
    technologies: ["Next.js", "TypeScript", "REST API", "Tailwind CSS"],
    liveUrl: "https://ephoto-kappa.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/ephoto",
    imageUrl: "/e-photo.png",
    featured: true
  },
  {
    title: "Flimzy",
    description: "A movie discovery app built during the HNG Internship using TMDB API. Search, explore, and view trending films.",
    technologies: ["Next.js", "TypeScript", "TMDB API", "Tailwind CSS"],
    liveUrl: "https://flimzy.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/HNGx-stage8-movie-app",
    imageUrl: "/flimzy.png",
    featured: true
  },
  {
    title: "VidGrab",
    description: "A tool for downloading videos across social media platforms with format selection and batch processing.",
    technologies: ["Next.js", "REST API", "Shadcn UI", "Tailwind CSS"],
    liveUrl: "https://social-media-tool-kohl.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/social-media-tool",
    imageUrl: "/localhost.png",
    featured: true
  },
  {
    title: "Quiz App",
    description: "An interactive app for taking quizzes to test your knowledge with scoring and progress tracking.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://brainstorm-lilac-three.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/brainstorm",
    imageUrl: "/quiz.png"
  },
  {
    title: "Meme Creator",
    description: "A fun tool for designing and sharing your own memes with ease, featuring text overlays and templates.",
    technologies: ["Next.js", "REST API", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://meme-creator-eta.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/meme-creator",
    imageUrl: "/mem.png"
  },
  {
    title: "Entertain Me",
    description: "Generate all kinds of fun content—jokes, flirts, insults, riddles, truth or dare challenges, and more.",
    technologies: ["Next.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://entertain-me-lime.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/EntertainMe",
    imageUrl: "/entertain.png"
  },
  {
    title: "WebFullshot",
    description: "A powerful tool for capturing full-page website screenshots effortlessly with sharing capabilities.",
    technologies: ["Next.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://webshot-six.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/webshot",
    imageUrl: "/webshot.png"
  },
  {
    title: "Prayer Time",
    description: "An app that lets you input your location to get accurate daily prayer times.",
    technologies: ["Next.js", "REST API", "TypeScript"],
    liveUrl: "https://prayer-time-umber.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/prayer-time",
    imageUrl: "/prayer.png"
  },
  {
    title: "Portfolio Showcase",
    description: "A showcase portfolio of personal & client projects, built with smooth transitions and responsive UI.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://portfolio-psi-taupe-53.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/Portfolio",
    imageUrl: "/portfolio-psi-taupe-53.png"
  },
  {
    title: "URL Shortener",
    description: "A simple tool to shorten long URLs—just paste your link and get a short version instantly.",
    technologies: ["Next.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://url-shortener-azure-theta.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/url-shortener",
    imageUrl: "/url-shortener.png"
  },
  {
    title: "Lyrics Finder",
    description: "Discover song lyrics with a clean and intuitive interface and artist information.",
    technologies: ["React", "REST API", "Tailwind CSS"],
    liveUrl: "https://lyrics-finder-six.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/lyrics-finder",
    imageUrl: "/lyrics-finder-six.png"
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes for any URL/Text with seamless functionality and customization options.",
    technologies: ["React", "REST API", "Tailwind CSS"],
    liveUrl: "https://qr-code-generator-flame-sigma.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/qr-code-generator",
    imageUrl: "/qr-code-generator-flame-sigma.png"
  },
  {
    title: "Currency Converter",
    description: "Convert between currencies with real-time exchange rates and historical data.",
    technologies: ["Next.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://currency-converter-wine-nu.vercel.app/",
    githubUrl: "https://github.com/MuritalaAhmed05/currency-converter",
    imageUrl: "/currency-converter-wine-nu.png"
  },
  {
    title: "Weather App",
    description: "Accurate and up-to-date weather information with forecasting and location services.",
    technologies: ["Next.js", "REST API", "Tailwind CSS", "Geolocation"],
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
    <Card className="glass-card glass-card-hover h-full flex flex-col justify-between overflow-hidden group border border-gray-200/60 dark:border-white/10 rounded-2xl">
      <div>
        <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {project.featured && (
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-orange-500/90 text-white font-mono text-[10px] uppercase tracking-wider backdrop-blur-md px-2.5 py-1">
                Featured
              </Badge>
            </div>
          )}

          <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md bg-black/70 text-white/90 backdrop-blur-md text-[11px] font-mono border border-white/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 rounded-md bg-black/70 text-white/90 backdrop-blur-md text-[11px] font-mono border border-white/10">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        <CardHeader className="p-4 pb-1.5">
          <CardTitle className="text-lg font-bold tracking-tight text-foreground group-hover:text-orange-500 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-1">
            {project.description}
          </CardDescription>
        </CardHeader>
      </div>

      <CardFooter className="p-4 pt-2.5 flex items-center justify-between border-t border-gray-100 dark:border-white/5 mt-2">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800"
        >
          <Github size={15} />
          <span>Code</span>
        </a>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white shadow-sm transition-all hover:scale-105"
        >
          <span>Live Demo</span>
          <ExternalLink size={13} />
        </a>
      </CardFooter>
    </Card>
  );
};

const ProjectsPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Next.js', 'React', 'REST API', 'JavaScript'];

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        activeCategory === 'All' ||
        project.technologies.some((tech) => tech.toLowerCase().includes(activeCategory.toLowerCase()));

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => router.push('/#projects')} 
          className="glass-card hover:bg-orange-500 hover:text-white text-foreground border-gray-300 dark:border-white/10 rounded-full px-4 py-2 font-mono text-xs flex items-center gap-2 shadow-lg transition-all"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Button>
      </div>

      {/* Header Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 text-center">
        <span className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-3 inline-flex items-center gap-1.5">
          <FolderGit2 size={14} />
          ALL WORKS DIRECTORY
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
          Complete <span className="gradient-text-orange">Project Archive</span>
        </h1>
        {/* Signature Archive Directory Ribbon Underline */}
        <div className="flex items-center justify-center gap-1.5 my-3">
          <div className="w-2 h-2 rounded-xs bg-orange-500 rotate-45" />
          <div className="w-16 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-md shadow-orange-500/30" />
          <div className="w-2 h-2 rounded-xs bg-orange-500 rotate-45" />
        </div>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Explore all {allProjects.length} web applications, utilities, and client works engineered by Muritala Ahmed.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-card pl-10 pr-9 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-xs sm:text-sm focus:ring-orange-500 focus:border-orange-500 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto bg-gray-100 dark:bg-neutral-900/60 p-1.5 rounded-2xl border border-gray-200/60 dark:border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-orange-600 text-white font-bold shadow-md shadow-orange-500/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-gray-200/50 dark:hover:bg-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Counter Pill */}
        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1">
          <span>Showing {filteredProjects.length} of {allProjects.length} projects</span>
          {(searchQuery || activeCategory !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="text-orange-500 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="glass-card p-12 rounded-2xl border border-dashed border-gray-300 dark:border-white/10 text-center max-w-md mx-auto my-12">
            <FolderGit2 size={32} className="text-orange-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold">No Projects Found</h3>
            <p className="text-xs text-muted-foreground mt-1 mb-4">
              No project matched your search "{searchQuery}" or filter "{activeCategory}".
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              size="sm"
              className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;