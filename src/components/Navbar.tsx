import React from 'react';
import { motion } from 'motion/react';

export const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        <div className="absolute left-0 flex items-center gap-2 group cursor-pointer">
          <span className="text-2xl font-bold tracking-tighter group-hover:scale-110 transition-transform">
            FZ<span className="text-zinc-400">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['Services', 'Case Studies', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={item === 'Contact' ? 'mailto:info@forzaic.com' : `#${item.toLowerCase().replace(' ', '-')}`}
              className="opacity-60 hover:opacity-100 transition-opacity relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="absolute right-0 flex items-center gap-4">
          <a href="mailto:info@forzaic.com" className="hidden sm:block px-6 py-2 bg-black text-white rounded-full text-sm font-medium hover:scale-105 transition-transform active:scale-95">
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
