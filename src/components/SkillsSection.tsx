
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
          className={`px-6 py-3 rounded-2xl bg-gradient-to-r from-${skill.color}-500/20 to-${skill.color}-600/20 border border-${skill.color}-500/30 text-${skill.color}-200 font-bold backdrop-blur`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          viewport={{ once: true }}
        >
          {skill.name}
        </motion.span>
      ))}
    </div>
  );
}
