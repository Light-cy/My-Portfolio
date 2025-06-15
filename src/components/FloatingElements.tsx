
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
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + index * 2,
            repeat: Infinity,
            ease: "linear",
            delay: index * 2,
          }}
        >
          <element.Icon />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
