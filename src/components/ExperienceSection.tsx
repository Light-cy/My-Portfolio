
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
          className={`group relative p-6 rounded-2xl bg-gradient-to-br from-${exp.color}-500/8 to-transparent border border-${exp.color}-500/20 hover:border-${exp.color}-500/40 transition-all duration-200`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ 
            scale: 1.01, 
            x: 5,
            transition: { duration: 0.2 }
          }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${exp.color}-400 to-${exp.color}-600 rounded-r`} />
          <h3 className={`text-xl font-bold text-${exp.color}-300 mb-1`}>{exp.title}</h3>
          <p className="text-white/80 font-semibold mb-1">{exp.company}</p>
          <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
          <p className="text-gray-300">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
