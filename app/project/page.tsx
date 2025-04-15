"use client"
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  imageUrl: string;
  featured?: boolean;
}

// All projects combined from both lists
const allProjects: ProjectProps[] = [
  {
    title: "Dynamic Illuminations",
    description: "A vibrant and dynamic platform showcasing creative light art installations with interactive elements and visual storytelling.",
    technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS"],
    liveUrl: "https://dynamicilluminations.com.ng/",
    githubUrl: "#",
    imageUrl: "/dynamicilluminations.png",
    featured: true
  },
  {
    title: "VidGrab",
    description: "A tool for downloading videos across social media platforms with format selection and batch processing.",
    technologies: ["React", "Node.js", "Express", "FFmpeg"],
    liveUrl: "https://social-media-tool-kohl.vercel.app/",
    githubUrl: "#",
    imageUrl: "/localhost.png",
    featured: true
  },
  {
    title: "Quiz App",
    description: "An interactive app for taking quizzes to test your knowledge with scoring and progress tracking.",
    technologies: ["React", "JavaScript", "CSS", "Local Storage"],
    liveUrl: "https://brainstorm-lilac-three.vercel.app/",
    githubUrl: "#",
    imageUrl: "/quiz.png"
  },
  {
    title: "Meme Creator",
    description: "A fun tool for designing and sharing your own memes with ease, featuring text overlays and templates.",
    technologies: ["React", "Canvas API", "File API", "CSS"],
    liveUrl: "https://meme-creator-eta.vercel.app/",
    githubUrl: "#",
    imageUrl: "/mem.png"
  },
  {
    title: "Entertain Me",
    description: "Your one-stop platform for exploring and enjoying entertaining content with recommendations.",
    technologies: ["React", "Entertainment API", "CSS Modules", "Local Storage"],
    liveUrl: "https://entertain-me-lime.vercel.app/",
    githubUrl: "#",
    imageUrl: "/entertain.png"
  },
  {
    title: "Fancy Text",
    description: "A creative tool for generating stylish and fancy text for your projects with multiple style options.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Unicode"],
    liveUrl: "https://fancy-text-delta.vercel.app/",
    githubUrl: "#",
    imageUrl: "/fancy.png"
  },
  {
    title: "WebFullshot",
    description: "A powerful tool for capturing full-page website screenshots effortlessly with sharing capabilities.",
    technologies: ["JavaScript", "DOM API", "Canvas", "File System API"],
    liveUrl: "https://webshot-six.vercel.app/",
    githubUrl: "#",
    imageUrl: "/webshot.png"
  },
  {
    title: "Prayer Time",
    description: "An app for keeping track of daily prayer time by location with notifications and reminders.",
    technologies: ["React", "Prayer API", "Geolocation", "Local Storage"],
    liveUrl: "https://prayer-time-umber.vercel.app/",
    githubUrl: "#",
    imageUrl: "/prayer.png"
  },
  {
    title: "ShopEase",
    description: "A seamless platform for discovering and shopping your favorite products with ease and secure checkout.",
    technologies: ["Next.js", "TypeScript", "Redux", "Stripe"],
    liveUrl: "https://shop-ease-gamma.vercel.app/",
    githubUrl: "#",
    imageUrl: "/image.png",
    featured: true
  },
  {
    title: "Portfolio Showcase",
    description: "A sleek portfolio to display personal and professional projects with filtering and categories.",
    technologies: ["React", "Styled Components", "Framer Motion", "JavaScript"],
    liveUrl: "https://portfolio-psi-taupe-53.vercel.app/",
    githubUrl: "#",
    imageUrl: "/portfolio-psi-taupe-53.png"
  },
  {
    title: "URL Shortener",
    description: "Effortlessly create and manage short, user-friendly URLs with analytics and tracking.",
    technologies: ["Next.js", "MongoDB", "API Routes", "JavaScript"],
    liveUrl: "https://url-shortener-azure-theta.vercel.app/",
    githubUrl: "#",
    imageUrl: "/url-shortener.png"
  },
  {
    title: "Quran App",
    description: "A digital platform for reading and exploring the Quran with ease, translations, and bookmarks.",
    technologies: ["React", "API Integration", "Styled Components", "IndexedDB"],
    liveUrl: "https://quran-app-khaki.vercel.app/",
    githubUrl: "#",
    imageUrl: "/quran-app-khaki.png",
    featured: true
  },
  {
    title: "Lyrics Finder",
    description: "Discover song lyrics with a clean and intuitive interface and artist information.",
    technologies: ["React", "Lyrics API", "CSS", "Context API"],
    liveUrl: "https://lyrics-finder-six.vercel.app/",
    githubUrl: "#",
    imageUrl: "/lyrics-finder-six.png"
  },
  {
    title: "QR Code Generator",
    description: "Generate QR codes for any URL with seamless functionality and customization options.",
    technologies: ["JavaScript", "QR Code API", "HTML5", "CSS3"],
    liveUrl: "https://qr-code-generator-flame-sigma.vercel.app/",
    githubUrl: "#",
    imageUrl: "/qr-code-generator-flame-sigma.png"
  },
  {
    title: "Currency Converter",
    description: "Convert between currencies with real-time exchange rates and historical data.",
    technologies: ["React", "Exchange Rate API", "Chart.js", "CSS"],
    liveUrl: "https://currency-converter-wine-nu.vercel.app/",
    githubUrl: "#",
    imageUrl: "/currency-converter-wine-nu.png"
  },
  {
    title: "Weather App",
    description: "Accurate and up-to-date weather information with forecasting and location services.",
    technologies: ["React", "Weather API", "Chart.js", "Geolocation"],
    liveUrl: "https://weather-app-tau-mocha.vercel.app/",
    githubUrl: "#",
    imageUrl: "/weather-app-tau-mocha.png",
    featured: true
  },
  {
    title: "Timbu Shop",
    description: "A modern e-commerce platform with a focus on user experience and product discovery.",
    technologies: ["Next.js", "MongoDB", "Auth.js", "Tailwind CSS"],
    liveUrl: "https://timbu-shop-kappa.vercel.app/",
    githubUrl: "#",
    imageUrl: "/timbu-shop-kappa.png"
  },
  {
    title: "Analog Clock",
    description: "A minimalist analog clock application with a sleek design and time zone support.",
    technologies: ["JavaScript", "Canvas API", "CSS3", "Date API"],
    liveUrl: "https://analog-clock-two-chi.vercel.app/",
    githubUrl: "#",
    imageUrl: "/analog-clock-two-chi.png"
  },
  {
    title: "Crush Message",
    description: "A fun platform for sending anonymous messages to your crush with notifications.",
    technologies: ["React", "Firebase", "Authentication", "Cloud Functions"],
    liveUrl: "https://crush-message-qgzt.vercel.app/",
    githubUrl: "#",
    imageUrl: "/crush-message.png"
  },
  {
    title: "Calculator App",
    description: "Perform calculations quickly with this modern calculator app with history tracking.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Math API"],
    liveUrl: "https://calc-eta-umber.vercel.app/",
    githubUrl: "#",
    imageUrl: "/calc-eta-umber.png"
  },
  {
    title: "Chat App",
    description: "An interactive real-time chat application with user profiles and file sharing.",
    technologies: ["React", "Firebase", "WebSockets", "Material UI"],
    liveUrl: "https://chat-app-nine-red.vercel.app/",
    githubUrl: "#",
    imageUrl: "/chat-app-nine-red.png",
    featured: true
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card className="h-full overflow-hidden group border-gray-200 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-400 transition-colors duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
        <div className="w-full h-full bg-gray-200 dark:bg-gray-800 relative">
          {/* Replace with actual image once available */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100 dark:bg-gray-800">
            <span className="text-sm">{project.imageUrl.replace('/', '')}</span>
            {/* Uncomment when images are available */}
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
           
          </div>
        </div>
        
        {/* Technologies badges overlaid on image */}
        <div className="absolute bottom-2 left-2 right-2 z-20 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <Badge key={index} className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge className="bg-black/70 text-white hover:bg-black/80 backdrop-blur-sm text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-2">
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
      
      <CardFooter className="flex justify-between pt-0">
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
  return (
    <>
      <div className="bg-gray-50 dark:bg-gray-900/30 py-16">
  <div className="container mx-auto px-4">
    {/* Add back button here */}
    <div className="max-w-3xl mx-auto mb-6 flex justify-start">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => router.push('/#projects')} 
        className="flex items-center gap-2 hover:text-orange-500 -ml-2"
      >
        <ArrowLeft size={16} />
        Back
      </Button>
    </div>
    
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        A comprehensive collection of my web development work, showcasing my skills, creativity, and problem-solving abilities.
      </p>
    </div>
  </div>
</div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Project count */}
        <div className="mb-6 flex items-center">
          <Badge variant="outline" className="px-3 py-1">
            {allProjects.length} Projects
          </Badge>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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