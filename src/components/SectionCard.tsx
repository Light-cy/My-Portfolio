
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  children: React.ReactNode;
}

export default function SectionCard({ id, title, icon: Icon, color, children }: SectionCardProps) {
  return (
    <motion.section
      id={id}
      className="relative w-full rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className={`p-3 rounded-2xl bg-gradient-to-br from-${color}-500/20 to-${color}-600/20 border border-${color}-500/30`}
          whileHover={{ 
            rotate: [0, -5, 5, 0],
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          <Icon className={`w-8 h-8 text-${color}-300`} />
        </motion.div>
        <motion.h2 
          className={`text-4xl md:text-5xl font-black tracking-tight font-orbitron bg-gradient-to-r from-${color}-300 via-${color}-400 to-${color}-500 bg-clip-text text-transparent`}
          whileHover={{ 
            x: 5,
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.h2>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
