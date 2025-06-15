
import { motion } from "framer-motion";

export default function EnhancedBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Simplified gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/15 via-blue-900/20 to-cyan-900/15" />
      
      {/* Reduced floating orbs */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-24 h-24 rounded-full opacity-20 blur-xl`}
          style={{
            background: `radial-gradient(circle, ${
              ['#8338ec', '#3a86ff', '#06ffa5', '#ff006e'][i % 4]
            }, transparent)`
          }}
          animate={{
            x: [0, 60, -30, 30, 0],
            y: [0, -60, 30, -20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
        />
      ))}
    </div>
  );
}
