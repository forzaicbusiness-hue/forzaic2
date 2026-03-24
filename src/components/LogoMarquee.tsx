import React from 'react';
import { motion } from 'motion/react';

const words = ['MOTION.', 'MOTION.', 'MOTION.', 'MOTION.', 'MOTION.'];

export const LogoMarquee: React.FC = () => {
  return (
    <div className="py-12 border-y border-black/5 overflow-hidden bg-white/30 backdrop-blur-sm">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            {words.map((word, idx) => (
              <span 
                key={`${i}-${idx}`} 
                className="text-2xl font-bold tracking-tighter opacity-30 hover:opacity-100 transition-all duration-500 cursor-default flex group/word"
              >
                <span className="group-hover/word:text-red-500 transition-colors duration-500">MOT</span>
                <span className="group-hover/word:text-black transition-colors duration-500">ION.</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};
