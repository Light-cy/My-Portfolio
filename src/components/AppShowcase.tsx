
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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

interface AppShowcaseProps {
  project: Project;
  onClose: () => void;
}

export default function AppShowcase({ project, onClose }: AppShowcaseProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl bg-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Carousel */}
            <div className="relative">
              {project.images && project.images.length > 0 && (
                <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
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
              )}
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-between">
              <div>
                <motion.h2 
                  className={`text-3xl md:text-4xl font-black tracking-tight mb-2 bg-gradient-to-r from-${project.color}-300 via-${project.color}-400 to-${project.color}-500 bg-clip-text text-transparent`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.title}
                </motion.h2>
                
                <motion.p 
                  className="text-gray-400 text-lg mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.tech}
                </motion.p>
                
                <motion.p 
                  className="text-gray-300 text-lg leading-relaxed mb-6"
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
