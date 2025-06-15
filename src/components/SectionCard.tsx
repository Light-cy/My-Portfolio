
import { motion } from "framer-motion";

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
  return (
    <motion.section
      id={id}
      className="relative group w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="relative px-8 py-10 rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl overflow-hidden"
        whileHover={{ 
          x: 5,
          rotate: 0.5,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {/* Simplified background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <motion.h2 
            className={`flex items-center gap-4 text-3xl md:text-4xl font-black mb-6 tracking-tight text-${color}-300 uppercase font-orbitron`}
            whileHover={{ 
              x: 3,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className={`p-3 rounded-xl bg-${color}-500/20 border border-${color}-500/30`}
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                scale: 1.1,
                transition: { duration: 0.4 }
              }}
            >
              <Icon className={`w-6 h-6 text-${color}-300`} />
            </motion.div>
            {title}
          </motion.h2>
          <motion.div 
            className="text-lg text-gray-200 leading-relaxed font-space"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
