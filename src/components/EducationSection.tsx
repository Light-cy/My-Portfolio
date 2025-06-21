
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <motion.div
      className="p-6 rounded-2xl theme-project-blue"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-bold theme-gradient-blue mb-2">Bachelor of Science in Computer Science</h3>
      <p className="theme-text-accent font-semibold">University of the Central Punjab</p>
      <p className="theme-text-muted">2023–Present</p>
    </motion.div>
  );
}
