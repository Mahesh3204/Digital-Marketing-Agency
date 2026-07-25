import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { CheckCircle2 } from 'lucide-react';

const stats = [
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Client Retention", value: 95, suffix: "%" },
  { label: "Revenue Generated", value: 20, prefix: "$", suffix: "M+" },
  { label: "Marketing Experts", value: 15, suffix: "+" },
];

export default function About() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img 
                src="/src/assets/about_agency.png" 
                alt="Marketing Team" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "/src/assets/unsplash-17.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-8 -right-8 glass p-6 rounded-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <span className="font-bold text-lg">10</span>
                </div>
                <div>
                  <p className="font-bold text-dark text-base">Years of</p>
                  <p className="text-gray-600 text-sm">Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark mb-6">
              We Don't Just Run Ads. <br />
              <span className="text-gradient">We Build Empires.</span>
            </h2>
            <p className="text-base text-gray-600 mb-8">
              GrowthWave is an award-winning digital marketing agency dedicated to scaling ambitious brands. We combine data science with creative storytelling to deliver predictable, scalable growth.
            </p>
            
            <div className="space-y-4 mb-10">
              {["Data-Driven Strategies", "Transparent Reporting & Analytics", "Dedicated Elite Account Managers"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="text-dark font-medium text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-heading font-bold text-dark mb-2 flex items-center">
                    {stat.prefix}
                    <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
