
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
      iconText: "text-cyan-300 dark:text-cyan-300",
      titleText: "from-cyan-300 via-cyan-400 to-cyan-500",
      lightIconBg: "from-cyan-100 to-cyan-200",
      lightIconBorder: "border-cyan-300",
      lightIconText: "text-cyan-600",
      lightTitleText: "from-cyan-600 via-cyan-700 to-cyan-800"
    },
    purple: {
      iconBg: "from-purple-500/20 to-purple-600/20",
      iconBorder: "border-purple-500/30",
      iconText: "text-purple-300 dark:text-purple-300",
      titleText: "from-purple-300 via-purple-400 to-purple-500",
      lightIconBg: "from-purple-100 to-purple-200",
      lightIconBorder: "border-purple-300",
      lightIconText: "text-purple-600",
      lightTitleText: "from-purple-600 via-purple-700 to-purple-800"
    },
    blue: {
      iconBg: "from-blue-500/20 to-blue-600/20",
      iconBorder: "border-blue-500/30",
      iconText: "text-blue-300 dark:text-blue-300",
      titleText: "from-blue-300 via-blue-400 to-blue-500",
      lightIconBg: "from-blue-100 to-blue-200",
      lightIconBorder: "border-blue-300",
      lightIconText: "text-blue-600",
      lightTitleText: "from-blue-600 via-blue-700 to-blue-800"
    },
    green: {
      iconBg: "from-green-500/20 to-green-600/20",
      iconBorder: "border-green-500/30",
      iconText: "text-green-300 dark:text-green-300",
      titleText: "from-green-300 via-green-400 to-green-500",
      lightIconBg: "from-green-100 to-green-200",
      lightIconBorder: "border-green-300",
      lightIconText: "text-green-600",
      lightTitleText: "from-green-600 via-green-700 to-green-800"
    },
    pink: {
      iconBg: "from-pink-500/20 to-pink-600/20",
      iconBorder: "border-pink-500/30",
      iconText: "text-pink-300 dark:text-pink-300",
      titleText: "from-pink-300 via-pink-400 to-pink-500",
      lightIconBg: "from-pink-100 to-pink-200",
      lightIconBorder: "border-pink-300",
      lightIconText: "text-pink-600",
      lightTitleText: "from-pink-600 via-pink-700 to-pink-800"
    },
    orange: {
      iconBg: "from-orange-500/20 to-orange-600/20",
      iconBorder: "border-orange-500/30",
      iconText: "text-orange-300 dark:text-orange-300",
      titleText: "from-orange-300 via-orange-400 to-orange-500",
      lightIconBg: "from-orange-100 to-orange-200",
      lightIconBorder: "border-orange-300",
      lightIconText: "text-orange-600",
      lightTitleText: "from-orange-600 via-orange-700 to-orange-800"
    }
  };

  const currentColors = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan;

  return (
    <motion.section
      id={id}
      className="relative w-full rounded-3xl backdrop-blur-xl border p-8 md:p-12 shadow-2xl
        dark:bg-black/40 dark:border-white/10
        bg-white/70 border-slate-200/60 shadow-slate-200/50"
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
          className={`p-3 rounded-2xl bg-gradient-to-br border
            dark:${currentColors.iconBg} dark:${currentColors.iconBorder}
            ${currentColors.lightIconBg} ${currentColors.lightIconBorder}`}
          whileHover={{ 
            rotate: [0, -5, 5, 0],
            scale: 1.05,
            transition: { duration: 0.15 }
          }}
        >
          <Icon className={`w-8 h-8 
            dark:${currentColors.iconText}
            ${currentColors.lightIconText}`} />
        </motion.div>
        <motion.h2 
          className={`text-4xl md:text-5xl font-black tracking-tight font-orbitron bg-gradient-to-r bg-clip-text text-transparent
            dark:${currentColors.titleText}
            ${currentColors.lightTitleText}`}
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
