"use client";

import React from "react";

const stats = [
  {
    value: "24/7",
    label: "Lead Coverage",
    description: "AI Agents engaging leads while you sleep.",
  },
  {
    value: "40+",
    label: "Hours Saved",
    description: "Weekly manual tasks automated per client.",
  },
  {
    value: "99.9%",
    label: "Data Accuracy",
    description: "Precision tracking for every marketing rupee.",
  },
  {
    value: "100%",
    label: "Digital Integration",
    description: "Seamless connection between ads and CRM.",
  },
];

const ImpactCounters = () => {
  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-900/50">
      <div className="container">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="mb-2 text-3xl font-extrabold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="mb-2 text-sm font-bold uppercase tracking-wider text-black dark:text-white">
                {stat.label}
              </div>
              <p className="text-xs leading-relaxed text-body-color dark:text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactCounters;