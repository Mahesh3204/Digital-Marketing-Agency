import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    client: "TechFlow SaaS",
    category: "SEO & Content",
    results: "+240% Organic Traffic",
    image: "./assets/unsplash-12.jpg"
  },
  {
    client: "Luminary Beauty",
    category: "Paid Social",
    results: "4.8x ROAS",
    image: "./assets/unsplash-15.jpg"
  },
  {
    client: "Fintech Startup",
    category: "Google Ads",
    results: "-45% Cost Per Lead",
    image: "./assets/unsplash-10.jpg"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white" id="case-studies">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-heading font-bold text-dark mb-6"
            >
              Real Results for <span className="text-gradient">Real Brands.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Explore how we've helped companies across various industries achieve unprecedented growth through our strategies.
            </motion.p>
          </div>
          <button className="btn-outline w-full md:w-auto shrink-0">View All Cases</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-6 h-80">
                <div className="absolute inset-0 bg-dark/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.client}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-sm font-semibold text-dark">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                    {item.client}
                  </h3>
                  <p className="text-primary font-semibold text-lg">{item.results}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
