
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
  },
  {
    title: "Daily Quotes App",
    tech: "Android + API",
    description: "Android app showing daily motivational quotes via API integration.",
    tags: ["Android", "API", "Motivational"],
    color: "orange"
  },
  {
    title: "Alarm Clock App",
    tech: "Android",
    description: "Alarm app with alert box; stops either manually or after 60 seconds.",
    tags: ["Android", "Alerts", "Timer"],
    color: "red"
  },
  {
    title: "Instagram Clone",
    tech: "Firebase",
    description: "Basic Instagram-like app using Firebase for authentication and media storage.",
    tags: ["Firebase", "Authentication", "Media Storage"],
    color: "pink"
  }
];

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`group relative p-6 rounded-2xl bg-gradient-to-br from-${project.color}-500/8 to-transparent border border-${project.color}-500/20 hover:border-${project.color}-500/40 backdrop-blur-sm overflow-hidden cursor-pointer`}
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
        >
          <motion.div 
            className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-white/20 to-white/40"
            whileHover={{ 
              scale: [1, 1.5, 1],
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          />
          <div className="relative z-10">
            <motion.h3 
              className={`text-xl font-bold text-${project.color}-300 mb-2`}
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
          </div>
        </motion.div>
      ))}
    </div>
  );
}
