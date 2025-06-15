
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Zap, Star, Heart, Rocket } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Code, color: 'text-cyan-400', size: 'w-5 h-5' },
    { Icon: Sparkles, color: 'text-purple-400', size: 'w-4 h-4' },
    { Icon: Zap, color: 'text-yellow-400', size: 'w-4 h-4' },
    { Icon: Star, color: 'text-pink-400', size: 'w-5 h-5' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} ${element.size} opacity-40`}
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            x: [0, 80, -40, 60, 0],
            y: [0, -60, 40, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: 20 + index * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 1.5,
          }}
        >
          <element.Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
