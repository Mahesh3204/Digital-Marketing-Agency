import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    desc: "Perfect for small businesses looking to establish a digital presence.",
    price: { monthly: 999, yearly: 799 },
    features: ["Basic SEO Audit", "1 Ad Campaign Management", "Monthly Reporting", "Email Support", "Social Media Posting (3x/week)"],
    popular: false
  },
  {
    name: "Growth",
    desc: "Comprehensive strategy for businesses ready to scale rapidly.",
    price: { monthly: 2499, yearly: 1999 },
    features: ["Advanced SEO Strategy", "Up to 5 Ad Campaigns", "Custom Analytics Dashboard", "Weekly Strategy Calls", "Full Social Media Management", "Conversion Rate Optimization"],
    popular: true
  },
  {
    name: "Enterprise",
    desc: "Custom solutions for large organizations and global brands.",
    price: { monthly: 4999, yearly: 3999 },
    features: ["Enterprise SEO & Content", "Unlimited Ad Campaigns", "Dedicated Account Team", "24/7 Priority Support", "Custom API Integrations", "Marketing Automation Setup"],
    popular: false
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-heading font-bold text-dark mb-6"
          >
            Transparent <span className="text-gradient">Pricing.</span>
          </motion.h2>
          <p className="text-lg text-gray-600 mb-8">
            Invest in growth. Choose a plan that aligns with your business goals.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`font-medium ${!isYearly ? 'text-dark' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-16 h-8 rounded-full bg-primary/20 p-1 flex relative transition-colors duration-300"
            >
              <motion.div 
                animate={{ x: isYearly ? 32 : 0 }}
                className="w-6 h-6 bg-primary rounded-full shadow-md"
              />
            </button>
            <span className={`font-medium flex items-center gap-2 ${isYearly ? 'text-dark' : 'text-gray-500'}`}>
              Yearly <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-dark text-white border border-primary/50 shadow-xl shadow-primary/20 transform md:-translate-y-4 md:scale-105 z-10' 
                  : 'bg-white border border-gray-100 text-dark'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-heading font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-extrabold font-heading">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className={`font-medium ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>/mo</span>
              </div>
              
              <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/30' 
                  : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
              }`}>
                Get Started
              </button>
              
              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={20} className={plan.popular ? 'text-accent' : 'text-primary'} />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
