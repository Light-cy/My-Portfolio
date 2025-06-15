
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectInfoProps {
  project: Project;
}

const getColorClasses = (color: string) => {
  const colorMap = {
    red: "from-red-300 via-red-400 to-red-500",
    cyan: "from-cyan-300 via-cyan-400 to-cyan-500",
    purple: "from-purple-300 via-purple-400 to-purple-500",
    blue: "from-blue-300 via-blue-400 to-blue-500",
    green: "from-green-300 via-green-400 to-green-500",
    orange: "from-orange-300 via-orange-400 to-orange-500",
    pink: "from-pink-300 via-pink-400 to-pink-500",
  };
  return colorMap[color as keyof typeof colorMap] || "from-gray-300 via-gray-400 to-gray-500";
};

const getTagClasses = (color: string) => {
  const colorMap = {
    red: "bg-red-500/20 text-red-200 border-red-500/30",
    cyan: "bg-cyan-500/20 text-cyan-200 border-cyan-500/30",
    purple: "bg-purple-500/20 text-purple-200 border-purple-500/30",
    blue: "bg-blue-500/20 text-blue-200 border-blue-500/30",
    green: "bg-green-500/20 text-green-200 border-green-500/30",
    orange: "bg-orange-500/20 text-orange-200 border-orange-500/30",
    pink: "bg-pink-500/20 text-pink-200 border-pink-500/30",
  };
  return colorMap[color as keyof typeof colorMap] || "bg-gray-500/20 text-gray-200 border-gray-500/30";
};

const getButtonClasses = (color: string) => {
  const colorMap = {
    red: "from-red-500/20 to-red-600/20 border-red-500/30 hover:border-red-500/50 text-red-300 hover:text-red-200",
    cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 hover:border-cyan-500/50 text-cyan-300 hover:text-cyan-200",
    purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 hover:border-purple-500/50 text-purple-300 hover:text-purple-200",
    blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 hover:border-blue-500/50 text-blue-300 hover:text-blue-200",
    green: "from-green-500/20 to-green-600/20 border-green-500/30 hover:border-green-500/50 text-green-300 hover:text-green-200",
    orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 hover:border-orange-500/50 text-orange-300 hover:text-orange-200",
    pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 hover:border-pink-500/50 text-pink-300 hover:text-pink-200",
  };
  return colorMap[color as keyof typeof colorMap] || "from-gray-500/20 to-gray-600/20 border-gray-500/30 hover:border-gray-500/50 text-gray-300 hover:text-gray-200";
};

export default function ProjectInfo({ project }: ProjectInfoProps) {
  const handleGithubClick = () => {
    window.open(project.githubUrl, "_blank");
  };

  return (
    <div className="flex flex-col justify-start space-y-8">
      <div>
        <motion.h1 
          className={`text-4xl md:text-5xl font-black tracking-tight mb-4 bg-gradient-to-r ${getColorClasses(project.color)} bg-clip-text text-transparent`}
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

        {/* Key Features Section */}
        {project.features && (
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h3 className="text-lg font-semibold text-gray-200 mb-3">Key Features:</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="text-gray-300 text-base flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
        
        <motion.p 
          className="text-gray-300 text-lg leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: project.features ? 0.5 : 0.3 }}
        >
          {project.description}
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: project.features ? 0.6 : 0.4 }}
        >
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full ${getTagClasses(project.color)} text-sm font-medium`}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={handleGithubClick}
        className={`w-full py-4 px-6 rounded-2xl bg-gradient-to-r ${getButtonClasses(project.color)} transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: project.features ? 0.7 : 0.5 }}
      >
        <Github className="w-6 h-6" />
        View on GitHub
      </motion.button>
    </div>
  );
}
