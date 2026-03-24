import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-6 overflow-hidden">
      {/* Splatter background effect from reference image 3 */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[40%] h-[40%] bg-pink-400/30 blur-[100px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-1/4 right-0 w-[40%] h-[40%] bg-red-500/30 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border border-black/5 text-xs font-bold mb-8"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Now accepting new Q2 partners
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.9] mb-8"
        >
          <span className="text-rose-400">A</span>
          <span className="text-sky-400">d</span>
          <span className="text-emerald-400">v</span>
          <span className="text-amber-400">e</span>
          <span className="text-indigo-400">r</span>
          <span className="text-fuchsia-400">t</span>
          ising agency <br />
          that makes <span className="text-red-500 italic">brands.</span> <br />
          stand out
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-0 leading-relaxed"
        >
          We combine data-driven strategy with experimental design to deliver 
          media solutions that actually convert.
        </motion.p>

      </div>

      {/* Floating Cards List from reference image 1 */}
      <div className="relative mt-16 w-full max-w-7xl mx-auto">
        <div className="flex justify-center -space-x-12 md:-space-x-20">
          {[
            {
              id: 1,
              company: "VELOCE",
              tagline: "Precision in Motion.",
              cta: "EXPLORE",
              image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=400&h=600&auto=format&fit=crop",
              badge: "@motion"
            },
            {
              id: 2,
              company: "LUMINA",
              tagline: "Brighten Your Space",
              cta: "SHOP NOW",
              image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=400&h=600&auto=format&fit=crop",
              badge: "@strategy"
            },
            {
              id: 3,
              company: "AETHER",
              tagline: "Pure Essence",
              cta: "DISCOVER",
              image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&h=600&auto=format&fit=crop",
              badge: "@luxury"
            },
            {
              id: 4,
              company: "TERRA",
              tagline: "Rooted in Nature",
              cta: "VIEW COLLECTION",
              image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=400&h=600&auto=format&fit=crop",
              badge: "@advertising"
            },
            {
              id: 5,
              company: "NOVA",
              tagline: "The Future is Here",
              cta: "GET STARTED",
              image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&h=600&auto=format&fit=crop",
              badge: "@tech"
            }
          ].map((ad, i) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 100, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: (i - 2) * 8 }}
              transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 50 }}
              whileHover={{ y: -40, rotate: 0, zIndex: 50, scale: 1.1 }}
              className="relative group/card w-40 h-56 md:w-64 md:h-80 bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden cursor-pointer"
            >
              <img 
                src={ad.image} 
                alt={ad.company} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 md:p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/70 uppercase">
                    {ad.company}
                  </span>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center">
                    <div className="w-1 h-1 bg-white rounded-full" />
                  </div>
                </div>
                
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-white font-medium text-sm md:text-lg leading-tight tracking-tight">
                    {ad.tagline}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] md:text-[10px] text-white/50 font-bold tracking-widest uppercase border-b border-white/30 pb-0.5">
                      {ad.cta}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
