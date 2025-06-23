
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
  // Define explicit color mappings to ensure Tailwind generates the classes
  const colorClasses = {
    cyan: {
      iconBg: "from-cyan-500/20 to-cyan-600/20",
      iconBorder: "border-cyan-500/30",
      iconText: "text-cyan-300",
      titleText: "from-cyan-300 via-cyan-400 to-cyan-500"
    },
    purple: {
      iconBg: "from-purple-500/20 to-purple-600/20",
      iconBorder: "border-purple-500/30",
      iconText: "text-purple-300",
      titleText: "from-purple-300 via-purple-400 to-purple-500"
    },
    blue: {
      iconBg: "from-blue-500/20 to-blue-600/20",
      iconBorder: "border-blue-500/30",
      iconText: "text-blue-300",
      titleText: "from-blue-300 via-blue-400 to-blue-500"
    },
    green: {
      iconBg: "from-green-500/20 to-green-600/20",
      iconBorder: "border-green-500/30",
      iconText: "text-green-300",
      titleText: "from-green-300 via-green-400 to-green-500"
    },
    pink: {
      iconBg: "from-pink-500/20 to-pink-600/20",
      iconBorder: "border-pink-500/30",
      iconText: "text-pink-300",
      titleText: "from-pink-300 via-pink-400 to-pink-500"
    },
    orange: {
      iconBg: "from-orange-500/20 to-orange-600/20",
      iconBorder: "border-orange-500/30",
      iconText: "text-orange-300",
      titleText: "from-orange-300 via-orange-400 to-orange-500"
    }
  };

  const currentColors = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan;

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
          className={`p-3 rounded-2xl bg-gradient-to-br ${currentColors.iconBg} border ${currentColors.iconBorder}`}
          whileHover={{ 
            rotate: [0, -5, 5, 0],
            scale: 1.05,
            transition: { duration: 0.15 }
          }}
        >
          <Icon className={`w-8 h-8 ${currentColors.iconText}`} />
        </motion.div>
        <motion.h2 
          className={`text-4xl md:text-5xl font-black tracking-tight font-orbitron bg-gradient-to-r ${currentColors.titleText} bg-clip-text text-transparent`}
          whileHover={{ 
            x: 5,
            transition: { duration: 0.15 }
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
