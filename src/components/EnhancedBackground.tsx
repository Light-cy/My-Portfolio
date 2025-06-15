
import { motion } from "framer-motion";

export default function EnhancedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Simplified gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-blue-900/20 to-cyan-900/15" />
      
      {/* Enhanced floating orbs with smoother animations */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-32 h-32 rounded-full opacity-15 blur-xl`}
          style={{
            background: `radial-gradient(circle, ${
              ['#8338ec', '#3a86ff', '#06ffa5', '#ff006e', '#ffbe0b'][i % 5]
            }, transparent)`,
            left: `${10 + (i * 20)}%`,
            top: `${15 + (i * 15)}%`,
          }}
          animate={{
            x: [0, 100, -50, 75, 0],
            y: [0, -80, 60, -40, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            opacity: [0.15, 0.25, 0.1, 0.2, 0.15],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
        />
      ))}
    </div>
  );
}
