
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
  // Define explicit color mappings to ensure theme-aware styles
  const colorClasses = {
    cyan: {
      iconBg: "bg-cyan-100/80 dark:bg-gradient-to-br dark:from-cyan-500/20 dark:to-cyan-600/20",
      iconBorder: "border-cyan-300 dark:border-cyan-500/30",
      iconText: "theme-icon-cyan",
      titleText: "theme-gradient-cyan"
    },
    purple: {
      iconBg: "bg-purple-100/80 dark:bg-gradient-to-br dark:from-purple-500/20 dark:to-purple-600/20",
      iconBorder: "border-purple-300 dark:border-purple-500/30",
      iconText: "theme-icon-purple",
      titleText: "theme-gradient-purple"
    },
    blue: {
      iconBg: "bg-blue-100/80 dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-blue-600/20",
      iconBorder: "border-blue-300 dark:border-blue-500/30",
      iconText: "theme-icon-blue",
      titleText: "theme-gradient-blue"
    },
    green: {
      iconBg: "bg-green-100/80 dark:bg-gradient-to-br dark:from-green-500/20 dark:to-green-600/20",
      iconBorder: "border-green-300 dark:border-green-500/30",
      iconText: "theme-icon-green",
      titleText: "theme-gradient-green"
    },
    pink: {
      iconBg: "bg-pink-100/80 dark:bg-gradient-to-br dark:from-pink-500/20 dark:to-pink-600/20",
      iconBorder: "border-pink-300 dark:border-pink-500/30",
      iconText: "theme-icon-pink",
      titleText: "theme-gradient-pink"
    },
    orange: {
      iconBg: "bg-orange-100/80 dark:bg-gradient-to-br dark:from-orange-500/20 dark:to-orange-600/20",
      iconBorder: "border-orange-300 dark:border-orange-500/30",
      iconText: "theme-icon-orange",
      titleText: "theme-gradient-orange"
    }
  };

  const currentColors = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan;

  return (
    <motion.section
      id={id}
      className="relative w-full rounded-3xl theme-card p-8 md:p-12"
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
          className={`p-3 rounded-2xl ${currentColors.iconBg} border ${currentColors.iconBorder}`}
          whileHover={{ 
            rotate: [0, -5, 5, 0],
            scale: 1.05,
            transition: { duration: 0.15 }
          }}
        >
          <Icon className={`w-8 h-8 ${currentColors.iconText}`} />
        </motion.div>
        <motion.h2 
          className={`text-4xl md:text-5xl font-black tracking-tight font-orbitron ${currentColors.titleText}`}
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
