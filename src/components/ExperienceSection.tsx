
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Assistant Professor (Intern)",
    company: "University of Central Punjab",
    period: "Nov 2024 – Present",
    description: "Assisted faculty in academic and administrative tasks. Supported students and helped with course material.",
    color: "cyan"
  },
  {
    title: "Private Tutor",
    company: "Self-employed",
    period: "Jun 2024 – Present",
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
    period: "Apr 2025 – Present",
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
          initial={{ opacity: 0, x: -40, scale: 0.98 }}
          whileInView={{ 
            opacity: 1, 
            x: 0, 
            scale: 1,
            transition: {
              delay: index * 0.08,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }
          }}
          whileHover={{ 
            x: 8,
            rotate: 0.5,
            scale: 1.01,
            boxShadow: "0 12px 35px rgba(0, 0, 0, 0.35)",
            transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
          }}
          viewport={{ once: true, margin: "-30px" }}
        >
          <motion.div 
            className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${exp.color}-400 to-${exp.color}-600 rounded-r`}
            initial={{ height: 0 }}
            whileInView={{ 
              height: "100%",
              transition: { delay: index * 0.08 + 0.15, duration: 0.3 }
            }}
            whileHover={{ 
              width: 4,
              transition: { duration: 0.15 }
            }}
          />
          
          <motion.h3 
            className={`text-xl font-bold bg-gradient-to-r from-${exp.color}-300 to-${exp.color}-400 bg-clip-text text-transparent mb-1`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.08 + 0.1, duration: 0.3 }
            }}
          >
            {exp.title}
          </motion.h3>
          
          <motion.p 
            className="text-white/80 font-semibold mb-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.08 + 0.15, duration: 0.3 }
            }}
          >
            {exp.company}
          </motion.p>
          
          <motion.p 
            className="text-sm text-gray-400 mb-3"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.08 + 0.2, duration: 0.3 }
            }}
          >
            {exp.period}
          </motion.p>
          
          <motion.p 
            className="text-gray-300"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.08 + 0.25, duration: 0.3 }
            }}
          >
            {exp.description}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}
