
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-6 right-6 z-50 p-4 rounded-full border-2 backdrop-blur-xl transition-all duration-300 group overflow-hidden
        ${isDark 
          ? 'bg-black/20 border-white/20 hover:border-blue-400/60 text-blue-400' 
          : 'bg-white/90 border-gray-300 hover:border-blue-500/60 text-blue-600 shadow-lg'
        }`}
      whileHover={{ 
        scale: 1.15,
        rotate: 360,
        boxShadow: isDark 
          ? "0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)" 
          : "0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)",
        transition: { 
          duration: 0.4, 
          ease: "easeOut",
          rotate: { duration: 0.6, ease: "easeInOut" }
        }
      }}
      whileTap={{ 
        scale: 0.9,
        rotate: 180,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Animated background glow */}
      <motion.div
        className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ${isDark 
            ? 'bg-gradient-to-r from-blue-400/30 via-cyan-500/30 to-purple-500/30' 
            : 'bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30'
          }`}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Icon container */}
      <motion.div
        className="relative z-10 flex items-center justify-center"
        whileHover={{
          y: [-2, 2, -2],
          transition: {
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <motion.div
          key={isDark ? 'moon' : 'sun'}
          initial={{ 
            scale: 0, 
            rotate: -180,
            opacity: 0
          }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            opacity: 1
          }}
          exit={{ 
            scale: 0, 
            rotate: 180,
            opacity: 0
          }}
          transition={{ 
            duration: 0.5, 
            type: "spring",
            stiffness: 200,
            damping: 15
          }}
        >
          {isDark ? (
            <Moon 
              className="w-6 h-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" 
              fill="currentColor"
            />
          ) : (
            <Sun 
              className="w-6 h-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" 
            />
          )}
        </motion.div>
      </motion.div>

      {/* Floating particles effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100
            ${isDark ? 'bg-blue-400' : 'bg-blue-500'}`}
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 4) * 30],
            y: [0, Math.sin(i * Math.PI / 4) * 30],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.button>
  );
}
