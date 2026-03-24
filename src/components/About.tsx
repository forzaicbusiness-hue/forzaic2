import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Twitter, Linkedin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <footer id="about" className="py-24 px-6 relative z-10 bg-black text-white rounded-t-[4rem] overflow-hidden">
      {/* Dynamic Red Lighting Style Flow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Flowing light streaks (Shooting Stars) */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
            y: ['-50%', '150%'],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 0
          }}
          className="absolute top-0 left-0 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[2px] rotate-[35deg] origin-left"
        />
        <motion.div
          animate={{
            x: ['-100%', '200%'],
            y: ['-20%', '120%'],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          className="absolute top-1/4 left-0 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent blur-[3px] rotate-[35deg] origin-left"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8">
              Let's create <br />
              something <span className="text-red-500">iconic.</span>
            </h2>
            <div className="text-zinc-400 text-lg max-w-xl mb-12 space-y-6">
              <p>
                At forzaic, we specialise in transforming analogue businesses into fully digital entities, providing comprehensive website creation and marketing solutions to enhance your online presence.
              </p>
              <p>
                We’re new, but by no means incapable. Our focus is on driving forward through innovation (it’s even in our name).
              </p>
              <p>
                This isn’t just a standard start-up agency. We design how brands show up, align, and move people to act through creative direction paired with real data.
              </p>
              <p className="text-white font-medium">
                Thank you for your time and consideration.
              </p>
            </div>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-50 mb-4">New Business</p>
                <a href="mailto:info@forzaic.com" className="text-2xl md:text-4xl font-medium hover:text-zinc-400 transition-colors flex items-center gap-4">
                  info@forzaic.com <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tighter">FORZAIC</span>
            <span className="text-xs opacity-50">© 2026 All Rights Reserved</span>
          </div>
          <div className="flex gap-8 text-sm opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
