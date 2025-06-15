
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Smartphone } from "lucide-react";
import AppShowcase from "./AppShowcase";
import { projects } from "@/types/project";

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
            className={`group relative p-6 rounded-2xl bg-gradient-to-br from-${project.color}-500/8 to-transparent border border-${project.color}-500/20 hover:border-${project.color}-500/40 backdrop-blur-sm overflow-hidden cursor-pointer`}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.08
              }
            }}
            whileHover={{ 
              y: -8,
              rotate: -0.8,
              scale: 1.015,
              boxShadow: `0 20px 40px rgba(${project.color === 'cyan' ? '6, 182, 212' : project.color === 'purple' ? '147, 51, 234' : project.color === 'blue' ? '59, 130, 246' : project.color === 'green' ? '34, 197, 94' : project.color === 'orange' ? '249, 115, 22' : project.color === 'red' ? '239, 68, 68' : '236, 72, 153'}, 0.2)`,
              transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
            }}
            viewport={{ once: true, margin: "-60px" }}
            onClick={() => handleProjectClick(project)}
          >
            <motion.div 
              className="absolute top-4 right-4 flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: index * 0.08 + 0.15, duration: 0.3 }
              }}
            >
              <Icon className={`w-5 h-5 text-${project.color}-300 opacity-60 group-hover:opacity-100 transition-all duration-150`} />
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-white/20 to-white/40" />
            </motion.div>
            
            <div className="relative z-10">
              <motion.h3 
                className={`text-xl font-bold text-${project.color}-300 mb-2 pr-12`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.08 + 0.1, duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
                whileHover={{ 
                  x: 3,
                  transition: { duration: 0.15 }
                }}
              >
                {project.title} <span className="text-sm text-gray-400">({project.tech})</span>
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 mb-4"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.08 + 0.18, duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.08 + 0.23, duration: 0.3, ease: [0.16, 1, 0.3, 1] }
                }}
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className={`text-xs px-3 py-1 rounded-full bg-${project.color}-500/20 text-${project.color}-200 border border-${project.color}-500/30`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { 
                        delay: index * 0.08 + 0.25 + tagIndex * 0.03, 
                        duration: 0.25,
                        ease: [0.16, 1, 0.3, 1]
                      }
                    }}
                    whileHover={{
                      rotate: 6,
                      scale: 1.06,
                      transition: { duration: 0.1 }
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div 
                className="mt-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-150"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ 
                  opacity: 0, 
                  y: 0,
                  transition: { delay: index * 0.08 + 0.3, duration: 0.25 }
                }}
              >
                {project.type === "web" ? "Click to view live site" : "Click to view app details"}
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
