
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
        className="relative px-6 sm:px-8 md:px-12 lg:px-16 py-10 rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl overflow-hidden"
        whileHover={{ 
          rotate: 0.5,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {/* Simplified background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

        <motion.div
          className="relative z-10 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        >
          <motion.h2 
            className={`flex flex-col sm:flex-row sm:items-center gap-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-6 tracking-tight text-${color}-300 uppercase font-orbitron break-words`}
          >
            <motion.div
              className={`p-3 rounded-xl bg-${color}-500/20 border border-${color}-500/30 flex-shrink-0 w-fit`}
              whileHover={{ 
                rotate: [0, -10, 10, 0],
                scale: 1.1,
                transition: { duration: 0.4 }
              }}
            >
              <Icon className={`w-6 h-6 text-${color}-300`} />
            </motion.div>
            <span className="break-words min-w-0">{title}</span>
          </motion.h2>
          <motion.div 
            className="text-lg text-gray-200 leading-relaxed font-space w-full overflow-hidden"
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
