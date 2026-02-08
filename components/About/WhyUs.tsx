import React from "react";

const WhyUs = () => {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      <div className="container">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-8 md:p-10 lg:p-12 shadow-lg dark:shadow-gray-900/30">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                Why Choose Us
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Your Trusted Digital Partner in <span className="text-primary">Ahmedabad</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Empowering businesses with results-driven digital solutions
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    At <span className="font-semibold text-primary">21Twelve Interactive</span>, we empower businesses with data-driven digital strategies that deliver measurable growth through proven SEO, PPC, and social media solutions.
                  </p>
                </div>
              </div>
              
              {/* Mission Highlights */}
              <div className="space-y-3">
                {[
                  "Data-Driven Decision Making",
                  "Transparent Reporting",
                  "Measurable ROI Focus"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objective */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                  <svg className="h-6 w-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Our Objective</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To be your strategic digital partner, aligning marketing goals with business outcomes to build strong online presence, boost engagement, and consistently deliver high-ROI campaigns.
                  </p>
                </div>
              </div>
              
              {/* Objective Highlights */}
              <div className="space-y-3">
                {[
                  "Strategic Partnership Model",
                  "Business Goal Alignment",
                  "High-ROI Campaign Delivery",
                  "Continuous Optimization"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700"></div>

          {/* CTA */}
          <div className="text-center">
            <button className="rounded-lg bg-primary px-8 py-3.5 font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg">
              Start Your Digital Growth Journey
            </button>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Schedule a free consultation • No obligations • 30-minute strategy session
            </p>
          </div>

          {/* Background Elements */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;