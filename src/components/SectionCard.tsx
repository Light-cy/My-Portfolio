
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

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="relative group max-w-4xl w-full my-12 mx-auto"
      style={{ y, opacity, scale }}
    >
      <motion.div
        className="relative px-8 py-10 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          boxShadow: `0 25px 50px -12px ${color === 'cyan' ? 'rgba(6, 182, 212, 0.25)' : 'rgba(168, 85, 247, 0.25)'}`
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Faster animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${color}-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100`}
          transition={{ duration: 0.3 }}
        />
        
        {/* Faster floating particles inside card */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 bg-${color}-400 rounded-full opacity-60`}
              animate={{
                x: [0, 40, -24, 16, 0],
                y: [0, -32, 24, -16, 0],
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className={`flex items-center gap-4 text-3xl md:text-4xl font-black mb-6 tracking-tight bg-gradient-to-r from-${color}-300 via-white to-${color}-300 bg-clip-text text-transparent drop-shadow-lg uppercase`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className={`p-3 rounded-xl bg-gradient-to-br from-${color}-500/20 to-purple-500/20 border border-${color}-500/30`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.4, ease: "backOut" }}
            >
              <Icon className={`w-6 h-6 text-${color}-300`} />
            </motion.div>
            {title}
          </motion.h2>
          <motion.div 
            className="text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
