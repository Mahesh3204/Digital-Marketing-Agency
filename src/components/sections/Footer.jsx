import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1d] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="text-2xl font-heading font-bold flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <span className="text-white text-lg font-bold">G</span>
              </div>
              GrowthWave
            </div>
            <p className="text-gray-400 mb-8 max-w-sm">
              An award-winning digital marketing agency dedicated to scaling ambitious brands through data-driven strategies and creative excellence.
            </p>
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10 max-w-sm">
              <input type="email" placeholder="Enter your email" className="bg-transparent pl-4 pr-2 outline-none text-sm flex-1 text-white" />
              <button className="bg-primary hover:bg-primary-dark transition-colors px-6 py-2 rounded-full text-sm font-bold">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">SEO Optimization</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Paid Advertising</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} GrowthWave Agency. All rights reserved.</p>
          <p>Designed with ❤️ for growth.</p>
        </div>
      </div>
    </footer>
  );
}
