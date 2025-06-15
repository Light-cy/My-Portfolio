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
    liveUrl: "https://rock-paper-scissors-game-by-light.netlify.app/",
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
    githubUrl: "https://github.com/Light-cy/CODSOFT/tree/codsoft_task2_daily_quotes",
    images: [
      "/lovable-uploads/1936f69f-1cc9-4e78-b715-919e1381b661.png",
      "/lovable-uploads/fbfdf14f-d33d-4ce8-90f8-ba98bb55c260.png",
      "/lovable-uploads/63010ade-e23b-407e-905c-328af8000ad8.png",
      "/lovable-uploads/4396b3e5-7368-4410-8128-1893bf485f9d.png",
      "/lovable-uploads/19f7bf74-8362-467c-8ba1-104dcb2a5516.png"
    ]
  },
  {
    title: "Alarm Clock App",
    tech: "Android",
    description: "Alarm app with alert box; stops either manually or after 60 seconds.",
    tags: ["Android", "Alerts", "Timer"],
    color: "red",
    type: "app",
    githubUrl: "https://github.com/Light-cy/CODSOFT/tree/Alarm_clock_app_codsoft_task3",
    images: [
      "/lovable-uploads/d14554f6-616f-4813-bd21-9f0f64f25513.png",
      "/lovable-uploads/874d18cd-0b9a-4654-85fa-3807ee5f8f05.png",
      "/lovable-uploads/a22f2b8f-ab51-47b5-8f3d-9a18b7194c21.png",
      "/lovable-uploads/61ee7dc0-f8fb-4c02-beca-0e030200f602.png",
      "/lovable-uploads/5468c2dc-763b-4136-aff9-fbb8d134562d.png",
      "/lovable-uploads/4a335bc2-7276-4924-ba8b-1e1fb662ff6c.png"
    ]
  },
  {
    title: "Instagram Clone",
    tech: "Firebase",
    description: "Basic Instagram-like app using Firebase for authentication and media storage. Project is still ongoing to implement more features.",
    tags: ["Firebase", "Authentication", "Media Storage", "In Progress"],
    color: "pink",
    type: "app",
    githubUrl: "https://github.com/Light-cy/My-apps/tree/Project",
    images: [
      "/lovable-uploads/0c65a61c-ead7-434e-a3b9-d4806c7a77fd.png",
      "/lovable-uploads/15bf0521-0cad-4883-b3b9-2a93482ce9b5.png",
      "/lovable-uploads/7bbe67e8-3ae5-43d9-a9fc-08cb2c49b07d.png",
      "/lovable-uploads/b74a77e0-c6c4-40fe-847f-7eb0e875c5f5.png",
      "/lovable-uploads/ef5dfe6f-d94c-4f0b-ad8d-d9dcaca7c4f5.png",
      "/lovable-uploads/95e74639-ff1a-483e-9695-8335518094cb.png",
      "/lovable-uploads/819a3ccd-683a-4011-a4b1-72af0cb69852.png",
      "/lovable-uploads/00b9850b-bb24-4042-885b-bb90b61e9139.png",
      "/lovable-uploads/d216898b-9c6e-460e-bb39-727a36543dd9.png",
      "/lovable-uploads/fc2f93ee-abb0-4029-a002-eeaf22643bd0.png"
    ]
  }
];

export default function ProjectsSection() {
  const handleProjectClick = (project: Project) => {
    if (project.type === "web" && project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    } else if (project.type === "app") {
      const url = `/app-details?project=${encodeURIComponent(project.title)}`;
      window.open(url, "_blank");
    }
  };

  const getProjectIcon = (type: "web" | "app") => {
    return type === "web" ? ExternalLink : Smartphone;
  };

  return (
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
  );
}
