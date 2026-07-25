import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import CaseStudies from './components/sections/CaseStudies';
import DashboardPreview from './components/sections/DashboardPreview';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Team from './components/sections/Team';
import BlogPreview from './components/sections/BlogPreview';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function Loader() {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark"
    >
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 border-4 border-t-primary border-r-accent border-b-secondary border-l-transparent rounded-full"
        />
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-2xl font-heading text-white tracking-widest uppercase"
        >
          GrowthWave
        </motion.h2>
      </div>
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen bg-background text-text overflow-x-hidden font-sans">
          <Navbar />
          <main>
            <Hero />
            <TrustedBy />
            <About />
            <Services />
            <Process />
            <CaseStudies />
            <DashboardPreview />
            <Portfolio />
            <Testimonials />
            <Pricing />
            <Team />
            <BlogPreview />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
