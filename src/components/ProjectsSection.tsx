
import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";
import { projects, Project } from "@/types/project";

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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              y: -8,
              rotate: -1,
              boxShadow: `0 20px 40px rgba(${project.color === 'cyan' ? '6, 182, 212' : project.color === 'purple' ? '147, 51, 234' : project.color === 'blue' ? '59, 130, 246' : project.color === 'green' ? '34, 197, 94' : project.color === 'orange' ? '249, 115, 22' : project.color === 'red' ? '239, 68, 68' : '236, 72, 153'}, 0.2)`,
              transition: { duration: 0.15, ease: "easeOut" }
            }}
            transition={{ 
              delay: index * 0.05, 
              duration: 0.3,
              layout: { duration: 0.15, ease: "easeOut" }
            }}
            viewport={{ once: true }}
            onClick={() => handleProjectClick(project)}
          >
            <motion.div 
              className="absolute top-4 right-4 flex items-center gap-2"
            >
              <Icon className={`w-5 h-5 text-${project.color}-300 opacity-60 group-hover:opacity-100 transition-opacity duration-150`} />
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-white/20 to-white/40" />
            </motion.div>
            
            <div className="relative z-10">
              <motion.h3 
                className={`text-xl font-bold text-${project.color}-300 mb-2 pr-12`}
                whileHover={{ 
                  x: 2,
                  transition: { duration: 0.1 }
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
                      transition: { duration: 0.1 }
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              
              <div className="mt-4 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                {project.type === "web" ? "Click to view live site" : "Click to view app details"}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
