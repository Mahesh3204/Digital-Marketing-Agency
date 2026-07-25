import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

const team = [
  {
    name: "Alex Sterling",
    role: "CEO & Strategy Director",
    image: "/src/assets/unsplash-5.jpg"
  },
  {
    name: "Mia Chang",
    role: "Head of Growth",
    image: "/src/assets/unsplash-6.jpg"
  },
  {
    name: "Marcus Johnson",
    role: "Performance Marketing Lead",
    image: "/src/assets/unsplash-7.jpg"
  },
  {
    name: "Elena Rodriguez",
    role: "Creative Director",
    image: "/src/assets/unsplash-8.jpg"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-heading font-bold text-dark mb-6"
          >
            Meet the <span className="text-gradient">Experts.</span>
          </motion.h2>
          <p className="text-lg text-gray-600">
            Our team of seasoned marketers, data scientists, and creatives are obsessed with your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-6">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Twitter size={14} />
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
