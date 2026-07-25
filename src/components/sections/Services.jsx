import React from 'react';
import { motion } from 'framer-motion';
import { Search, MonitorSmartphone, Target, Mail, Megaphone, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Search size={32} />,
    title: "Search Engine Optimization",
    description: "Dominate search rankings and drive high-intent organic traffic to your website.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: <Target size={32} />,
    title: "Performance Marketing",
    description: "Maximize ROI with data-driven Google Ads and Meta advertising campaigns.",
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    icon: <MonitorSmartphone size={32} />,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your audience across all major platforms.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: <Mail size={32} />,
    title: "Email Marketing",
    description: "Nurture leads and drive repeat sales with automated, personalized email flows.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: <PenTool size={32} />,
    title: "Brand Identity",
    description: "Create a memorable brand that stands out and resonates with your target audience.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: <Megaphone size={32} />,
    title: "Content Marketing",
    description: "Attract and educate your prospects with high-quality, valuable content.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-heading font-bold text-dark mb-6"
          >
            Our Core <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            We offer end-to-end digital marketing solutions designed to scale your business, increase revenue, and dominate your industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-semibold text-dark mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="#" className="inline-flex items-center text-primary font-medium group-hover:underline">
                Learn more <Target size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
