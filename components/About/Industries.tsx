"use client";

import React from "react";
import Image from "next/image";

const industries = [
  { 
    title: "Real Estate", 
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop", 
    color: "from-blue-500/20" 
  },
  { 
    title: "Retail & E-commerce", 
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop", 
    color: "from-purple-500/20" 
  },
  { 
    title: "Travel & Hospitality", 
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=300&fit=crop", 
    color: "from-emerald-500/20" 
  },
  { 
    title: "SaaS & Tech", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", 
    color: "from-primary/20" 
  },
  { 
    title: "Healthcare & Pharma", 
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w-400&h=300&fit=crop", 
    color: "from-red-500/20" 
  },
  { 
    title: "Manufacturing", 
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop", 
    color: "from-orange-500/20" 
  },
];

const IndustriesNoImage = () => {
  const displayIndustries = [...industries, ...industries];

  return (
    <section className="bg-white py-16 dark:bg-gray-900 md:py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
            Industries We Serve with <span className="text-primary">Proven Services</span>
          </h2>
          <p className="text-body-color mx-auto max-w-[600px]">
            Providing specialized digital solutions across diverse sectors with precision and scale.
          </p>
        </div>
      </div>

      {/* Infinite Slider */}
      <div className="relative flex overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap py-10 hover:[animation-play-state:paused]">
          {displayIndustries.map((item, index) => (
            <div
              key={index}
              className={`relative mx-4 flex h-[220px] w-[280px] flex-shrink-0 flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white p-8 transition-all hover:border-primary/50 hover:shadow-2xl dark:border-gray-700 dark:bg-gray-800 shadow-sm group overflow-hidden`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 dark:via-black/20 dark:to-black/50 z-0" />
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>

              {/* Animated Gradient Overlay (Invisible until hover) */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl bg-gradient-to-br ${item.color} to-transparent z-10`} />

              {/* Content */}
              <div className="relative z-20 text-center">
                <h3 className="text-lg font-bold text-white drop-shadow-md whitespace-normal">
                  {item.title}
                </h3>
                <div className="mt-4 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full mx-auto rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-280px * ${industries.length} - 2rem * ${industries.length})); }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default IndustriesNoImage;