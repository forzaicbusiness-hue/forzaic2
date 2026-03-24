import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Shimmer */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Soft Animated Gradient */}
      <motion.div 
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: 'linear-gradient(135deg, #ff4d4d, #4facfe)' }}
      />

      {/* Subtle Red Streaks */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div 
          animate={{ x: [-100, 100], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[150%] h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent transform -rotate-12" 
        />
        <motion.div 
          animate={{ x: [100, -100], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-3/4 -right-1/4 w-[150%] h-px bg-gradient-to-r from-transparent via-red-400 to-transparent transform rotate-6" 
        />
        <motion.div 
          animate={{ y: [-50, 50], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/2 left-1/3 w-[2px] h-[150%] bg-gradient-to-b from-transparent via-red-600 to-transparent transform -skew-x-12" 
        />
      </div>

      {/* Light Field/Beam Texture */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-black to-transparent transform -skew-x-12" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-black to-transparent transform skew-x-12" />
      </div>

      {/* Slow Parallax Abstract Shapes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[20%] right-[10%] w-64 h-64 border border-black/5 rounded-full"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[60%] left-[5%] w-48 h-48 border border-black/5 rotate-45"
      />

      {/* Cursor Proximity Glow */}
      <div 
        className="cursor-glow"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      
      {/* Particle Shift (Subtle noise/grain) */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  );
};
