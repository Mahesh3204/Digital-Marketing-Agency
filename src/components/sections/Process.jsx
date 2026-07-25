import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: "Discover", desc: "We analyze your business, goals, and target audience." },
  { id: 2, title: "Research", desc: "Deep dive into competitors and market opportunities." },
  { id: 3, title: "Strategy", desc: "Develop a custom, data-driven marketing plan." },
  { id: 4, title: "Launch", desc: "Execute campaigns across selected digital channels." },
  { id: 5, title: "Optimization", desc: "Continuous testing and refinement for maximum ROI." },
  { id: 6, title: "Scale", desc: "Increase budgets on winning campaigns to dominate." },
];

export default function Process() {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-heading font-bold mb-6"
          >
            Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Growth Framework</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            A systematic approach to scaling your brand. No guesswork, just predictable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="text-6xl font-heading font-extrabold text-white/5 absolute -right-4 -bottom-4 group-hover:text-primary/10 transition-colors duration-500">
                0{step.id}
              </div>
              
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-6">
                {step.id}
              </div>
              
              <h3 className="text-2xl font-heading font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-400 relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
