import { motion } from "framer-motion";
import { User, Briefcase, GraduationCap, Code, FolderOpen, Mail } from "lucide-react";

export default function FloatingNav() {
  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { href: "#profile", label: "Profile", icon: User, color: "cyan" },
    { href: "#experience", label: "Experience", icon: Briefcase, color: "purple" },
    { href: "#education", label: "Education", icon: GraduationCap, color: "blue" },
    { href: "#skills", label: "Skills", icon: Code, color: "green" },
    { href: "#projects", label: "Projects", icon: FolderOpen, color: "pink" },
    { href: "#contact", label: "Contact", icon: Mail, color: "orange" }
  ];

  return (
    <motion.nav 
      className="relative z-30 w-full pointer-events-none"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    >
      <div className="mx-auto max-w-full flex justify-center gap-1 sm:gap-2 p-2 sm:p-3 bg-black/20 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 pointer-events-auto overflow-hidden">
        {navItems.map((item, index) => (
          <motion.button
            key={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className={`group relative flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold px-2 sm:px-4 py-2 rounded-xl transition-all duration-150 
              hover:bg-${item.color}-500/20 hover:shadow-lg hover:shadow-${item.color}-500/25 
              text-${item.color}-300 hover:text-${item.color}-200 font-space flex-shrink-0 min-w-0`}
            whileHover={{ 
              y: -2,
              transition: { duration: 0.15, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
          >
            <motion.div
              whileHover={{ 
                rotate: 15,
                transition: { duration: 0.15 }
              }}
              className="flex-shrink-0"
            >
              <item.icon className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.div>
            <span className="hidden sm:block truncate">{item.label}</span>
            <motion.div
              className={`absolute inset-0 rounded-xl bg-gradient-to-r from-${item.color}-500/0 to-${item.color}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-150`}
              layoutId={`nav-${item.href}`}
            />
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
