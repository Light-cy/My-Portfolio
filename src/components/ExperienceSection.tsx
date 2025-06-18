
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Assistant Professor (Intern)",
    company: "University of Central Punjab",
    period: "Nov 2024 – Feb 2025",
    description: "Assisted faculty in academic and administrative tasks. Supported students and helped with course material.",
    color: "cyan"
  },
  {
    title: "Private Tutor",
    company: "Self-employed",
    period: "Jun 2024 – Apr 2025",
    description: "Provided personalized tutoring tailored to individual learning styles.",
    color: "purple"
  },
  {
    title: "Front-End Intern",
    company: "Ireg-IT",
    period: "Oct 2024 – Dec 2024",
    description: "Tested and reviewed UI/UX of software applications. Identified bugs and suggested design improvements.",
    color: "blue"
  },
  {
    title: "Affiliate Marketer",
    company: "Nimal Solutions",
    period: "Apr 2025 – May 2025",
    description: "Sourced candidates via LinkedIn. Managed outreach and communication logs.",
    color: "green"
  }
];

export default function ExperienceSection() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className={`group relative p-6 rounded-2xl bg-gradient-to-br from-${exp.color}-500/8 to-transparent border border-${exp.color}-500/20 hover:border-${exp.color}-500/40 transition-all duration-150 cursor-pointer`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ 
            x: 8,
            rotate: 0.5,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
            transition: { duration: 0.15 }
          }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${exp.color}-400 to-${exp.color}-600 rounded-r`}
            whileHover={{ 
              width: 4,
              transition: { duration: 0.15 }
            }}
          />
          <h3 className={`text-xl font-bold bg-gradient-to-r from-${exp.color}-300 to-${exp.color}-400 bg-clip-text text-transparent mb-1`}>{exp.title}</h3>
          <p className="text-white/80 font-semibold mb-1">{exp.company}</p>
          <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
          <p className="text-gray-300">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
