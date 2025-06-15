
import { motion } from "framer-motion";

export default function EnhancedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-cyan-900/20" />
      
      {/* Faster floating orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-32 h-32 rounded-full opacity-30 blur-xl`}
          style={{
            background: `radial-gradient(circle, ${
              ['#ff006e', '#8338ec', '#3a86ff', '#06ffa5', '#ffbe0b', '#fb5607'][i % 6]
            }, transparent)`
          }}
          animate={{
            x: [0, 80, -40, 40, 0],
            y: [0, -80, 40, -24, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
        />
      ))}
    </div>
  );
}
