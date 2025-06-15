
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectInfoProps {
  project: Project;
}

export default function ProjectInfo({ project }: ProjectInfoProps) {
  const handleGithubClick = () => {
    window.open(project.githubUrl, "_blank");
  };

  return (
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
  );
}
