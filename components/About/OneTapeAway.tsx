"use client";

import React from "react";

const ContactStrip = () => {
  return (
    <section className="bg-primary py-10 md:py-14">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Text Content */}
          <div className="max-w-[700px] text-center md:text-left">
            <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-[42px]">
              One tap away from smarter <br className="hidden sm:block" />
              digital solutions And growth. <span className="opacity-90">Schedule a call today!</span>
            </h2>
          </div>

          {/* Right Side Button */}
          <div className="shrink-0">
            <a
              href="/contact"
              className="inline-block rounded-full bg-white px-10 py-4 text-lg font-bold uppercase tracking-wider text-primary shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactStrip;