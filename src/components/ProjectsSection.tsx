
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Smartphone } from "lucide-react";
import AppShowcase from "./AppShowcase";

interface Project {
  title: string;
  tech: string;
  description: string;
  tags: string[];
  color: string;
  type: "web" | "app";
  liveUrl?: string;
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
    title: "Rock-Paper-Scissors Game",
    tech: "HTML/CSS/JS",
    description: "Interactive browser game with local storage and dynamic UI.",
    tags: ["HTML/CSS/JS", "Local Storage", "Dynamic UI"],
    color: "purple",
    type: "web",
    liveUrl: "https://rps-game.example.com",
    githubUrl: "https://github.com/username/rps-game"
  },
  {
    title: "Flipkart Clone",
    tech: "HTML/CSS",
    description: "Static e-commerce UI clone with responsive design.",
    tags: ["HTML/CSS", "UI", "Responsive"],
    color: "blue",
    type: "web",
    liveUrl: "https://flipkart-clone.example.com",
    githubUrl: "https://github.com/username/flipkart-clone"
  },
  {
    title: "Quiz App",
    tech: "Android + SQLite",
    description: "Mobile quiz app storing questions and tracking scores using SQLite.",
    tags: ["Android", "SQLite", "Quiz"],
    color: "green",
    type: "app",
    githubUrl: "https://github.com/username/quiz-app",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
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

export default function ProjectsSection() {
  const [selectedApp, setSelectedApp] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    if (project.type === "web" && project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    } else if (project.type === "app") {
      setSelectedApp(project);
    }
  };

  const getProjectIcon = (type: "web" | "app") => {
    return type === "web" ? ExternalLink : Smartphone;
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const Icon = getProjectIcon(project.type);
          return (
            <motion.div
              key={index}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br from-${project.color}-500/8 to-transparent border border-${project.color}-500/20 hover:border-${project.color}-500/40 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -8,
                rotate: -1,
                boxShadow: `0 20px 40px rgba(${project.color === 'cyan' ? '6, 182, 212' : project.color === 'purple' ? '147, 51, 234' : project.color === 'blue' ? '59, 130, 246' : project.color === 'green' ? '34, 197, 94' : project.color === 'orange' ? '249, 115, 22' : project.color === 'red' ? '239, 68, 68' : '236, 72, 153'}, 0.2)`,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
              onClick={() => handleProjectClick(project)}
            >
              <motion.div 
                className="absolute top-4 right-4 flex items-center gap-2"
              >
                <Icon className={`w-5 h-5 text-${project.color}-300 opacity-60 group-hover:opacity-100 transition-opacity`} />
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-white/20 to-white/40" />
              </motion.div>
              
              <div className="relative z-10">
                <motion.h3 
                  className={`text-xl font-bold text-${project.color}-300 mb-2 pr-12`}
                  whileHover={{ 
                    x: 2,
                    transition: { duration: 0.2 }
                  }}
                >
                  {project.title} <span className="text-sm text-gray-400">({project.tech})</span>
                </motion.h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className={`text-xs px-3 py-1 rounded-full bg-${project.color}-500/20 text-${project.color}-200 border border-${project.color}-500/30`}
                      whileHover={{
                        rotate: 5,
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <div className="mt-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.type === "web" ? "Click to view live site" : "Click to view app details"}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {selectedApp && (
        <AppShowcase
          project={selectedApp}
          onClose={() => setSelectedApp(null)}
        />
      )}
    </>
  );
}
