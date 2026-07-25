import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy. While you might see initial improvements in 2-3 months, significant compounding results typically take 6-12 months. We focus on building a sustainable foundation that generates organic traffic for years."
  },
  {
    question: "Do you guarantee a certain number of leads?",
    answer: "While we cannot guarantee an exact number due to market variables out of our control, we do guarantee our process, execution, and transparent reporting. We set data-backed projections and KPIs during our discovery phase."
  },
  {
    question: "Who will be managing my advertising campaigns?",
    answer: "You will be assigned a dedicated Account Manager along with specialized media buyers who have managed millions in ad spend. We do not outsource our work; everything is handled in-house by our certified experts."
  },
  {
    question: "What industries do you typically work with?",
    answer: "We specialize in B2B SaaS, E-commerce, Healthcare, and Professional Services. However, our data-driven framework can be successfully applied to almost any industry looking to scale aggressively."
  },
  {
    question: "How often do you send reports and communicate?",
    answer: "You'll have access to a real-time custom analytics dashboard 24/7. Additionally, we provide detailed weekly updates and host a comprehensive monthly strategy review call to discuss performance and next steps."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16">
        
        <div className="lg:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-heading font-bold text-dark mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions.</span>
          </motion.h2>
          <p className="text-lg text-gray-600 mb-8">
            Got questions? We've got answers. If you don't see your question here, feel free to reach out to our team.
          </p>
          <button className="btn-outline w-full lg:w-auto">Contact Support</button>
        </div>

        <div className="lg:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  openIndex === index ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-heading font-bold text-lg ${openIndex === index ? 'text-primary' : 'text-dark'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-dark'
                  }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
