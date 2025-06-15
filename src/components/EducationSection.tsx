
import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <motion.div
      className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mb-2">Bachelor of Science in Computer Science</h3>
      <p className="text-white/80 font-semibold">National University of Computer & Emerging Sciences (FAST-NUCES)</p>
      <p className="text-gray-400">2019–2023</p>
    </motion.div>
  );
}
