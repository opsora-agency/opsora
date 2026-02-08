"use client";

import React from "react";
import SectionTitle from "../Common/SectionTitle";

const servicesData = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Results-driven strategies to scale your brand visibility and lead flow across digital channels.",
    subServices: ["Performance Ads", "Strategic SEO", "Lead Generation"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    learnMoreLink: "/services/digital-marketing-services" // Added individual link
  },
  {
    id: 2,
    title: "AI & Automation",
    description: "Smart systems that work 24/7 to eliminate manual tasks and engage with your customers instantly.",
    subServices: ["AI Chat Bots", "Workflow Automation", "CRM Integration"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    learnMoreLink: "/services/automation-services" // Added individual link
  },
  {
    id: 3,
    title: "Website Dev & Design",
    description: "Custom, high-performance websites built with a focus on user experience and business conversion.",
    subServices: ["UI/UX Design", "Next.js Development", "Landing Pages"],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    learnMoreLink: "/services/web-development-service" // Added individual link
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 md:py-28 lg:py-36 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Section Header with Blue Word */}
        <div className="mb-[60px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px]">
            Our Professional <span className="text-primary">Services</span>
          </h2>
          <p className="mx-auto max-w-[700px] text-base leading-relaxed text-body-color md:text-lg">
            From intelligent automation to performance marketing, we provide the tools you need to grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="relative group bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Fixed Icon Visibility: Background changes and icon color flips */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-base text-body-color leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Sub-Services Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.subServices.map((sub, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-body-color dark:text-gray-300 border border-transparent group-hover:border-primary/20 transition-all"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* Action Link - Updated with individual link */}
              <a 
                href={service.learnMoreLink} 
                className="inline-flex items-center text-sm font-bold text-primary hover:gap-2 transition-all"
              >
                Learn More 
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-16 text-center">
          <a
            href="/services"
            className="inline-block rounded-lg bg-primary px-8 py-3.5 text-center text-sm font-bold text-white transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
          >
            Explore All Services
          </a>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10 dark:opacity-5">
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Services;