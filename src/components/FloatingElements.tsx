
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Zap, Star, Heart, Rocket } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Code, color: 'text-cyan-400', size: 'w-6 h-6' },
    { Icon: Sparkles, color: 'text-purple-400', size: 'w-5 h-5' },
    { Icon: Zap, color: 'text-yellow-400', size: 'w-4 h-4' },
    { Icon: Star, color: 'text-pink-400', size: 'w-6 h-6' },
    { Icon: Heart, color: 'text-red-400', size: 'w-5 h-5' },
    { Icon: Rocket, color: 'text-green-400', size: 'w-6 h-6' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} ${element.size} opacity-60`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360, 720],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          <element.Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
