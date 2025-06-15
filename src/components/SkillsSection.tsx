
import { motion } from "framer-motion";

const skills = [
  { name: "React", color: "cyan" },
  { name: "TypeScript", color: "blue" },
  { name: "Tailwind CSS", color: "teal" },
  { name: "Shadcn UI", color: "purple" },
  { name: "Node.js", color: "green" },
  { name: "UI/UX Design", color: "pink" },
  { name: "Web Animation", color: "orange" },
  { name: "Performance Optimization", color: "yellow" },
  { name: "Framer Motion", color: "indigo" }
];

export default function SkillsSection() {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, index) => (
        <motion.span
          key={skill.name}
          className={`px-6 py-3 rounded-2xl bg-gradient-to-r from-${skill.color}-500/15 to-${skill.color}-600/15 border border-${skill.color}-500/30 text-${skill.color}-200 font-bold backdrop-blur-sm cursor-pointer`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            rotate: [-1, 1, -1, 0],
            x: 2,
            boxShadow: `0 8px 25px rgba(${skill.color === 'cyan' ? '6, 182, 212' : skill.color === 'blue' ? '59, 130, 246' : skill.color === 'purple' ? '147, 51, 234' : skill.color === 'green' ? '34, 197, 94' : skill.color === 'pink' ? '236, 72, 153' : skill.color === 'orange' ? '249, 115, 22' : skill.color === 'yellow' ? '234, 179, 8' : '99, 102, 241'}, 0.3)`,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          transition={{ delay: index * 0.05, duration: 0.25 }}
          viewport={{ once: true }}
        >
          {skill.name}
        </motion.span>
      ))}
    </div>
  );
}
