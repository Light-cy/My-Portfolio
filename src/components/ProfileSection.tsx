
import { motion } from "framer-motion";

export default function ProfileSection() {
  return (
    <motion.p
      className="text-xl leading-relaxed break-words"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Enthusiastic Computer Science student and developer passionate about innovative software solutions. 
      Experienced in C++ and other programming languages, with strong problem-solving and debugging skills. 
      Seeking an internship to apply technical expertise and gain industry experience.
    </motion.p>
  );
}
