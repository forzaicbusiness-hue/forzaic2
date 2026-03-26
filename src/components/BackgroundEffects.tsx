import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

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


  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Grid Shimmer */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Soft Animated Gradient */}
      <motion.div
        className="hidden md:block absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: 'linear-gradient(135deg, #ff4d4d, #4facfe)' }}
      />


{/* Light Field/Beam Texture */}
      <div className="hidden md:block absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-black to-transparent transform -skew-x-12" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-black to-transparent transform skew-x-12" />
      </div>


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
