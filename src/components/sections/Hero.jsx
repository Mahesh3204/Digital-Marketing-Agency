import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden" id="home">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              <TrendingUp size={16} />
              <span>Award-Winning Agency</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-heading font-extrabold text-dark leading-tight mb-6">
              We Scale Brands Through <span className="text-gradient">Data-Driven</span> Marketing.
            </h1>
            
            <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Transform your digital presence with enterprise-level SEO, Paid Advertising, and Conversion Rate Optimization. Trusted by fast-growing startups and global brands.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-sm">
                Book Free Consultation <ArrowRight size={16} />
              </button>
              <button className="btn-outline w-full sm:w-auto text-sm">
                View Case Studies
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 opacity-70">
              <div>
                <p className="text-3xl font-heading font-bold text-dark">500+</p>
                <p className="text-sm">Clients Scaled</p>
              </div>
              <div className="h-10 w-px bg-gray-300"></div>
              <div>
                <p className="text-3xl font-heading font-bold text-dark">$20M+</p>
                <p className="text-sm">Revenue Generated</p>
              </div>
            </div>
          </motion.div>

          {/* Right Dashboard Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 w-full max-w-2xl relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass shadow-2xl p-2 border border-white/40">
               <img 
                 src="/src/assets/agency_dashboard.png" 
                 alt="Marketing Dashboard Analytics" 
                 className="w-full h-auto rounded-xl object-cover shadow-inner"
                 onError={(e) => {
                   e.target.onerror = null; 
                   e.target.src = "/src/assets/unsplash-10.jpg";
                 }}
               />
               
               {/* Floating KPI Cards */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -left-6 top-1/4 glass-dark p-4 rounded-xl flex items-center gap-4 border border-white/10"
               >
                 <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                   <TrendingUp className="text-success" size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-300">Revenue</p>
                   <p className="text-lg font-bold text-white">+142.8%</p>
                 </div>
               </motion.div>
               
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -right-6 bottom-1/4 glass p-4 rounded-xl flex items-center gap-4"
               >
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                   <BarChart2 className="text-primary" size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500">Traffic</p>
                   <p className="text-lg font-bold text-dark">1.2M Users</p>
                 </div>
               </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
