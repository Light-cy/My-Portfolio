
import { motion } from "framer-motion";

const projects = [
  {
    title: "ATM Machine System",
    tech: "C++",
    description: "Console-based ATM simulation with file handling, user accounts, and transaction features.",
    tags: ["C++", "Console App", "File Handling"],
    color: "cyan"
  },
  {
    title: "Rock-Paper-Scissors Game",
    tech: "HTML/CSS/JS",
    description: "Interactive browser game with local storage and dynamic UI.",
    tags: ["HTML/CSS/JS", "Local Storage", "Dynamic UI"],
    color: "purple"
  },
  {
    title: "Flipkart Clone",
    tech: "HTML/CSS",
    description: "Static e-commerce UI clone with responsive design.",
    tags: ["HTML/CSS", "UI", "Responsive"],
    color: "blue"
  },
  {
    title: "Quiz App",
    tech: "Android + SQLite",
    description: "Mobile quiz app storing questions and tracking scores using SQLite.",
    tags: ["Android", "SQLite", "Quiz"],
    color: "green"
  }
];

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`group relative p-6 rounded-2xl bg-gradient-to-br from-${project.color}-500/8 to-transparent border border-${project.color}-500/20 hover:border-${project.color}-500/40 backdrop-blur-sm overflow-hidden`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.02, 
            y: -5,
            transition: { duration: 0.2 }
          }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative z-10">
            <h3 className={`text-xl font-bold text-${project.color}-300 mb-2`}>
              {project.title} <span className="text-sm text-gray-400">({project.tech})</span>
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className={`text-xs px-3 py-1 rounded-full bg-${project.color}-500/20 text-${project.color}-200 border border-${project.color}-500/30`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
