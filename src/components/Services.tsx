import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, BarChart3, Target, Zap } from 'lucide-react';

const services = [
  {
    title: 'Website Creation/Renovation',
    description: 'Bespoke digital experiences built for performance and conversion.',
    icon: Globe,
    color: 'bg-zinc-50'
  },
  {
    title: 'Media Strategy',
    description: 'Full-funnel media experiences as authentic as the results they deliver.',
    icon: Target,
    color: 'bg-blue-50'
  },
  {
    title: 'Programmatic',
    description: 'Automated buying that places your brand exactly where it needs to be.',
    icon: Zap,
    color: 'bg-pink-50'
  },
  {
    title: 'Data Analytics',
    description: 'Turning raw data into actionable insights for continuous growth.',
    icon: BarChart3,
    color: 'bg-emerald-50'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest font-semibold opacity-50 mb-4 block"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tight"
          >
            Delivering full-funnel media <br />
            <span className="text-zinc-400 italic">experiences</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-white border border-black/5 hover:border-black/10 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
