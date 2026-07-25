import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const logos = [
  "Google", "Shopify", "HubSpot", "Adobe", "Slack", "Airbnb", "Spotify", "Microsoft", "Netflix", "Meta"
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Trusted by 500+ businesses worldwide
        </p>
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
          className="freemode-carousel"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="h-12 flex items-center justify-center opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
                <span className="text-2xl font-bold font-heading text-gray-800">{logo}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
