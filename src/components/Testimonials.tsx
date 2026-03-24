import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Kate Davis',
    company: '',
    rating: 4.9,
    content: '"Forzaic completely transformed how our brand shows up online. The creative direction was exactly what we needed — bold, clear, and built around real data."',
    rotation: -2
  },
  {
    name: 'Martin Kazlauskas',
    company: '',
    rating: 4.8,
    content: '"From strategy to execution, the team at Forzaic delivered beyond expectations. Our digital presence has never been sharper."',
    rotation: 1
  },
  {
    name: 'Sanjay Sharma',
    company: '',
    rating: 4.9,
    content: '"Working with Forzaic felt like a genuine partnership. They understood our goals from day one and the results speak for themselves."',
    rotation: -1
  },
  {
    name: 'Tawanna Afumba',
    company: '',
    rating: 4.7,
    content: '"The new website and media strategy drove a significant uplift in engagement. Forzaic is the real deal — innovative, professional, and results-focused."',
    rotation: 2
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < full ? 'opacity-100' : i === full && hasHalf ? 'opacity-60' : 'opacity-20'}>
          ★
        </span>
      ))}
      <span className="text-xs text-zinc-500 ml-1 font-medium">{rating}</span>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-50/50 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight">Our trusted <span className="bg-red-500 text-white px-3 py-1 rounded-lg">Clients.</span></h2>
          <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
            Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              style={{ rotate: t.rotation }}
              className="p-8 bg-white rounded-3xl shadow-sm border border-black/5 transition-all duration-500 flex flex-col justify-between gap-6"
            >
              <p className="text-sm text-zinc-600 leading-relaxed">{t.content}</p>
              <div>
                <StarRating rating={t.rating} />
                <p className="mt-3 font-semibold text-sm text-black">{t.name}</p>
                <p className="text-xs text-zinc-400">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
