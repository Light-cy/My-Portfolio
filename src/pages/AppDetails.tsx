
import { motion } from "framer-motion";
import { Github, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";

interface Project {
  title: string;
  tech: string;
  description: string;
  tags: string[];
  color: string;
  type: "web" | "app";
  githubUrl: string;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "ATM Machine System",
    tech: "C++",
    description: "Console-based ATM simulation with file handling, user accounts, and transaction features.",
    tags: ["C++", "Console App", "File Handling"],
    color: "cyan",
    type: "app",
    githubUrl: "https://github.com/username/atm-system",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      "https://images.unsplash.com/photo-1518770660439-4636190af475"
    ]
  },
  {
    title: "Quiz App",
    tech: "Android + SQLite",
    description: "Mobile quiz app storing questions and tracking scores using SQLite.",
    tags: ["Android", "SQLite", "Quiz"],
    color: "green",
    type: "app",
    githubUrl: "https://github.com/Light-cy/CODSOFT",
    images: [
      "/lovable-uploads/a61a0bef-f2c1-4faf-b454-1506eaa29ab3.png",
      "/lovable-uploads/0c1a2fab-83ea-4bf6-b9a6-d74e2d5770dd.png",
      "/lovable-uploads/a2faf440-3970-473b-88fe-f2cab70137d2.png",
      "/lovable-uploads/52838fe3-3399-403b-91e3-4fd06c44511e.png"
    ]
  },
  {
    title: "Daily Quotes App",
    tech: "Android + API",
    description: "Android app showing daily motivational quotes via API integration.",
    tags: ["Android", "API", "Motivational"],
    color: "orange",
    type: "app",
    githubUrl: "https://github.com/username/quotes-app",
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    ]
  },
  {
    title: "Alarm Clock App",
    tech: "Android",
    description: "Alarm app with alert box; stops either manually or after 60 seconds.",
    tags: ["Android", "Alerts", "Timer"],
    color: "red",
    type: "app",
    githubUrl: "https://github.com/username/alarm-app",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    ]
  },
  {
    title: "Instagram Clone",
    tech: "Firebase",
    description: "Basic Instagram-like app using Firebase for authentication and media storage.",
    tags: ["Firebase", "Authentication", "Media Storage"],
    color: "pink",
    type: "app",
    githubUrl: "https://github.com/username/instagram-clone",
    images: [
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ]
  }
];

export default function AppDetails() {
  const [searchParams] = useSearchParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectTitle = searchParams.get('project');
  
  const project = projects.find(p => p.title === projectTitle);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Portfolio`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const previousImage = () => {
    if (project.images && project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  const handleGithubClick = () => {
    window.open(project.githubUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-6">
            {project.images && project.images.length > 0 && (
              <>
                {/* Main Image */}
                <div className="relative w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain bg-white/5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={previousImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                      >
                        <ChevronRight className="w-5 h-5 text-white" />
                      </button>
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex 
                                ? `bg-${project.color}-400` 
                                : 'bg-white/30 hover:bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {project.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3 max-w-md mx-auto">
                    {project.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex 
                            ? `border-${project.color}-400` 
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Project Details */}
          <div className="flex flex-col justify-start space-y-8">
            <div>
              <motion.h1 
                className={`text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-r from-${project.color}-300 via-${project.color}-400 to-${project.color}-500 bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                className="text-gray-400 text-xl mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.tech}
              </motion.p>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full bg-${project.color}-500/20 text-${project.color}-200 border border-${project.color}-500/30 text-sm font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.button
              onClick={handleGithubClick}
              className={`w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-${project.color}-500/20 to-${project.color}-600/20 border border-${project.color}-500/30 hover:border-${project.color}-500/50 transition-all duration-300 flex items-center justify-center gap-3 text-${project.color}-300 hover:text-${project.color}-200 font-semibold text-lg`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Github className="w-6 h-6" />
              View on GitHub
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
