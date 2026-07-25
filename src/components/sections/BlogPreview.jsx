import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    title: "The Future of SEO: AI and Search Generative Experience",
    category: "SEO Strategy",
    date: "Oct 12, 2026",
    image: "/src/assets/unsplash-16.jpg"
  },
  {
    title: "How to Build a High-Converting B2B Marketing Funnel",
    category: "Conversion",
    date: "Sep 28, 2026",
    image: "/src/assets/unsplash-10.jpg"
  },
  {
    title: "Maximizing ROAS on Meta Ads in 2026",
    category: "Paid Advertising",
    date: "Sep 15, 2026",
    image: "/src/assets/unsplash-12.jpg"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-heading font-bold text-dark mb-6"
            >
              Latest <span className="text-gradient">Insights.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Expert marketing strategies, actionable tips, and industry trends directly from our specialists.
            </motion.p>
          </div>
          <button className="btn-outline w-full md:w-auto shrink-0">View All Articles</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-gray-400 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-primary font-medium">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
