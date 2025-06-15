
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionCardProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon: any;
  color?: string;
}

export default function SectionCard({ 
  id, 
  title, 
  children, 
  icon: Icon, 
  color = "cyan" 
}: SectionCardProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="relative group max-w-4xl w-full my-12 mx-auto"
      style={{ y, opacity }}
    >
      <motion.div
        className="relative px-8 py-10 rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl overflow-hidden"
        whileHover={{ 
          scale: 1.01,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
      >
        {/* Simplified background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className={`flex items-center gap-4 text-3xl md:text-4xl font-black mb-6 tracking-tight text-${color}-300 uppercase font-orbitron`}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.15 }
            }}
          >
            <motion.div
              className={`p-3 rounded-xl bg-${color}-500/20 border border-${color}-500/30`}
              whileHover={{ 
                rotate: 15,
                transition: { duration: 0.2 }
              }}
            >
              <Icon className={`w-6 h-6 text-${color}-300`} />
            </motion.div>
            {title}
          </motion.h2>
          <motion.div 
            className="text-lg text-gray-200 leading-relaxed font-space"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
