import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CMO, TechFlow",
    image: "./assets/unsplash-1.jpg",
    text: "GrowthWave completely transformed our digital presence. Within 6 months, our organic traffic increased by 240% and our customer acquisition cost dropped by half."
  },
  {
    name: "Michael Chen",
    role: "Founder, Luminary",
    image: "./assets/unsplash-2.jpg",
    text: "The level of transparency and strategic thinking this team brings is unmatched. Their customized dashboards gave us insights we never knew we needed."
  },
  {
    name: "Emma Watson",
    role: "VP Marketing, Elevate",
    image: "./assets/unsplash-3.jpg",
    text: "Our paid social campaigns were burning cash before GrowthWave stepped in. They restructured everything and got us to a 4.8x ROAS in just 30 days."
  },
  {
    name: "David Rodriguez",
    role: "CEO, Finova",
    image: "./assets/unsplash-4.jpg",
    text: "It's rare to find an agency that genuinely cares about your bottom line. GrowthWave feels like an in-house team rather than an external vendor."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark text-white overflow-hidden relative" id="testimonials">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
            Don't Just Take <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Our Word For It.</span>
          </h2>
          <p className="text-base text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
            Hear from the founders and marketing leaders who have scaled their businesses using our data-driven frameworks.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} className="text-warning fill-warning" />
              ))}
            </div>
            <span className="font-bold text-xl">4.9/5</span>
            <span className="text-gray-400">Average Rating</span>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full h-[400px]"
          >
            {testimonials.map((test, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="glass-dark w-full h-full p-8 rounded-3xl flex flex-col relative border border-white/10 shadow-2xl">
                  <Quote size={40} className="text-primary/40 absolute top-8 right-8" />
                  
                  <div className="flex gap-1 mb-6 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-warning fill-warning" />
                    ))}
                  </div>
                  
                  <p className="text-base text-gray-200 mb-8 flex-1 italic">
                    "{test.text}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={test.image} 
                      alt={test.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-bold font-heading text-lg">{test.name}</h4>
                      <p className="text-sm text-gray-400">{test.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
