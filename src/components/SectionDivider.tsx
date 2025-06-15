
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative flex justify-center items-center h-16 my-8">
      <motion.div
        className="h-1 w-64 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      <motion.div
        className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
