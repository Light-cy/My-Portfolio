
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
    <div className="space-y-8">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className={`text-lg font-semibold bg-gradient-to-r from-${category.headerColor}-300 to-${category.headerColor}-400 bg-clip-text text-transparent font-orbitron mb-3`}>
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                className={`px-4 py-2 rounded-xl bg-gradient-to-r from-${skill.color}-500/15 to-${skill.color}-600/15 border border-${skill.color}-500/30 text-${skill.color}-200 font-medium backdrop-blur-sm cursor-pointer text-sm`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  rotate: [-1, 1, -1, 0],
                  x: 2,
                  boxShadow: `0 8px 25px rgba(${skill.color === 'cyan' ? '6, 182, 212' : skill.color === 'blue' ? '59, 130, 246' : skill.color === 'purple' ? '147, 51, 234' : skill.color === 'green' ? '34, 197, 94' : skill.color === 'pink' ? '236, 72, 153' : skill.color === 'orange' ? '249, 115, 22' : skill.color === 'yellow' ? '234, 179, 8' : skill.color === 'teal' ? '20, 184, 166' : skill.color === 'red' ? '239, 68, 68' : '99, 102, 241'}, 0.3)`,
                  transition: { duration: 0.15, ease: "easeOut" }
                }}
                transition={{ delay: (categoryIndex * 0.1) + (index * 0.03), duration: 0.25 }}
                viewport={{ once: true }}
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
