import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'Next-Gen Rail Infrastructure',
    client: 'EuroRail Systems',
    image: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=800&h=1000&auto=format&fit=crop',
    category: 'Strategy',
    story: 'Played a key role in launching the programmatic campaign in 2022, scaling from an initial £4K test budget to a £25K/month always-on strategy, consistently delivering an ROI of 2.5–4x month-on-month.'
  },
  {
    title: 'The Grand Horizon Rebrand',
    client: 'Horizon Luxury Group',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&h=1000&auto=format&fit=crop',
    category: 'Creative',
    story: 'Through a balanced upper- and lower-funnel targeting strategy, we have consistently driven increased site traffic and conversions, while achieving a CPA of $200 or below—aligned with the client’s target'
  },
  {
    title: 'Peak Performance Digital',
    client: 'Vigor Fitness',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&h=1000&auto=format&fit=crop',
    category: 'Growth',
    story: 'Drove awareness for sale campaigns for a high-profile fitness brand, delivering a 0.13% CTR—outperforming the 0.08% industry benchmark'
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold opacity-50 mb-4 block">Our Work</span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Selected <span className="italic">Success</span> Stories</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold border-b border-black pb-1 hover:gap-4 transition-all">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] mb-6">
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Story Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm p-8 flex flex-col justify-center items-center text-center transition-opacity duration-300"
                >
                  <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                    {project.story}
                  </p>
                </motion.div>

                <div className="absolute top-6 left-6 px-4 py-1 bg-white/80 backdrop-blur-md rounded-full text-xs font-bold">
                  {project.category}
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-1 group-hover:translate-x-2 transition-transform">{project.title}</h3>
              <p className="opacity-50 text-sm font-medium">{project.client}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
