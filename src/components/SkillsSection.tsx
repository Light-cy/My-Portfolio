
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", color: "blue" },
      { name: "Java", color: "orange" },
      { name: "Python", color: "green" },
      { name: "JavaScript", color: "yellow" },
      { name: "HTML/CSS", color: "pink" },
      { name: "XML", color: "purple" }
    ],
    headerColor: "cyan"
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Firebase", color: "orange" },
      { name: "SQLite", color: "blue" },
      { name: "Postman", color: "orange" },
      { name: "VSCode", color: "blue" },
      { name: "Android Studio", color: "green" },
      { name: "MySQL Workbench", color: "cyan" }
    ],
    headerColor: "purple"
  },
  {
    title: "Core Areas",
    skills: [
      { name: "Software Development", color: "cyan" },
      { name: "Problem Solving", color: "green" },
      { name: "Debugging", color: "red" },
      { name: "Error Testing", color: "yellow" },
      { name: "UI/UX Design", color: "pink" },
      { name: "Performance Optimization", color: "teal" }
    ],
    headerColor: "blue"
  },
  {
    title: "Soft Skills & Additional",
    skills: [
      { name: "Teamwork", color: "blue" },
      { name: "Communication", color: "green" },
      { name: "Affiliate Marketing", color: "pink" },
      { name: "Recruitment", color: "purple" }
    ],
    headerColor: "pink"
  }
];

export default function SkillsSection() {
  return (
    <div className="space-y-6">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.05, duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-3"
        >
          <h3 className={`text-lg font-semibold bg-gradient-to-r from-${category.headerColor}-300 to-${category.headerColor}-400 bg-clip-text text-transparent font-orbitron mb-3`}>
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                className={`px-4 py-2 rounded-xl bg-gradient-to-r from-${skill.color}-500/15 to-${skill.color}-600/15 border border-${skill.color}-500/30 text-${skill.color}-200 font-medium backdrop-blur-sm cursor-pointer text-sm`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.1, ease: "easeOut" }
                }}
                transition={{ delay: (categoryIndex * 0.05) + (index * 0.02), duration: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
