"use client";

import React from "react";

const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: "Lead Response Time",
      opsora: "Instant (24/7 AI Agents)",
      others: "2-24 Hours (Manual)",
    },
    {
      feature: "Data & ROI Tracking",
      opsora: "Real-time AI Dashboards",
      others: "Monthly Manual Reports",
    },
    {
      feature: "Workflow Efficiency",
      opsora: "Fully Automated Systems",
      others: "Heavy Manual Data Entry",
    },
    {
      feature: "Contract Flexibility",
      opsora: "Month-to-Month Results",
      others: "Long-term Rigid Contracts",
    },
    {
      feature: "Support Availability",
      opsora: "24/7 Intelligent Support",
      others: "Standard Office Hours Only",
    },
  ];

  return (
    <section className="bg-white py-12 dark:bg-gray-900 md:py-20 lg:py-28">
      <div className="container px-4">
        {/* Section Header - Mobile Optimized */}
        <div className="mx-auto mb-12 max-w-[800px] text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary uppercase tracking-widest">
            The Advantage
          </span>
          <h2 className="text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Why Businesses Choose <span className="text-primary">Opsora</span>
          </h2>
        </div>

        {/* Comparison Table - Mobile Optimized */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg dark:border-gray-700 md:rounded-2xl">
          <div className="min-w-full md:w-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-body-color dark:text-gray-400 sm:p-5 md:p-6 lg:p-8">
                    Feature
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-primary sm:p-5 md:p-6 lg:p-8">
                    Opsora Agency
                  </th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider text-body-color dark:text-gray-400 sm:p-5 md:p-6 lg:p-8">
                    Traditional Agencies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index} 
                    className="bg-white transition-colors hover:bg-gray-50/50 dark:bg-gray-900 dark:hover:bg-gray-800/50"
                  >
                    <td className="p-4 text-sm font-semibold text-black dark:text-white sm:p-5 md:text-base md:p-6 lg:p-8">
                      {item.feature}
                    </td>
                    <td className="p-4 sm:p-5 md:p-6 lg:p-8">
                      <div className="flex items-center gap-2 text-sm font-bold text-primary md:text-base">
                        <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="whitespace-nowrap">{item.opsora}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-body-color dark:text-gray-400 sm:p-5 md:text-base md:p-6 lg:p-8">
                      <span className="whitespace-nowrap">{item.others}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA - Mobile Optimized */}
        <div className="mt-10 text-center md:mt-12">
          <p className="text-sm text-body-color mb-5 md:text-base md:mb-6">
            Experience the difference with a results-first approach.
          </p>
          <button className="w-full max-w-xs rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-primary/90 active:scale-95 sm:w-auto sm:px-8 md:text-base">
            Switch to Opsora Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;