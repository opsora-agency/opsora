'use client';
import { useState, FormEvent, useEffect } from 'react';
import Link from "next/link";

const SEOServicesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const seoServices = [
    {
      step: "01",
      title: "Technical SEO Optimization",
      description: "Foundation-level optimizations that ensure search engines can properly crawl, index, and understand your website.",
      features: [
        "Comprehensive site architecture audit",
        "Core Web Vitals optimization (90+ scores)",
        "Mobile-first indexing compliance",
        "Structured data implementation",
        "Website speed optimization (sub-2s load time)",
        "Security & HTTPS configuration"
      ],
      outcome: "Improved crawlability, better indexing, and enhanced user experience"
    },
    {
      step: "02",
      title: "Content Strategy & Development",
      description: "Strategic content creation optimized for both search intent and conversion.",
      features: [
        "Keyword gap analysis & opportunity mapping",
        "Search intent optimization",
        "Topic cluster & pillar page development",
        "E-E-A-T compliant content creation",
        "Content refresh & optimization",
        "Competitor content analysis"
      ],
      outcome: "Increased authority, better rankings, and higher conversion rates"
    },
    {
      step: "03",
      title: "Local SEO Domination",
      description: "Complete local presence optimization to dominate geographic search results.",
      features: [
        "Google Business Profile optimization",
        "Local citation audit & cleanup",
        "Review management strategy",
        "Geo-targeted content creation",
        "Local link building strategy",
        "Map pack optimization"
      ],
      outcome: "Increased local visibility, more foot traffic, and higher local conversions"
    },
    {
      step: "04",
      title: "E-commerce SEO",
      description: "Specialized optimization for online stores to maximize product visibility and sales.",
      features: [
        "Product page optimization strategy",
        "Category page structure optimization",
        "Product schema markup implementation",
        "Filter & navigation SEO",
        "Cart & checkout optimization",
        "Abandoned cart recovery SEO"
      ],
      outcome: "Higher product visibility, increased sales, and improved ROI"
    },
    {
      step: "05",
      title: "Link Building & Authority",
      description: "Strategic backlink acquisition to build domain authority and improve rankings.",
      features: [
        "Competitor backlink analysis",
        "High-authority link prospecting",
        "Digital PR & outreach strategy",
        "Broken link building",
        "Guest posting strategy",
        "Link profile monitoring"
      ],
      outcome: "Increased domain authority, better rankings, and sustainable growth"
    },
    {
      step: "06",
      title: "Performance Analytics",
      description: "Comprehensive tracking, reporting, and optimization based on data insights.",
      features: [
        "Custom SEO dashboard setup",
        "Conversion tracking implementation",
        "ROI analysis & reporting",
        "Competitor performance tracking",
        "Algorithm update monitoring",
        "Monthly strategy optimization"
      ],
      outcome: "Data-driven decisions, measurable ROI, and continuous improvement"
    }
  ];

  const resultsMetrics = [
    { value: "85%", label: "Client Retention Rate", description: "Long-term partnerships" },
    { value: "200+", label: "Average Keyword Growth", description: "First 6 months" },
    { value: "4.8", label: "Client Satisfaction", description: "Based on reviews" },
    { value: "60%", label: "Traffic Increase", description: "Average over 12 months" }
  ];

  const seoProcess = [
    {
      step: "01",
      title: "Discovery & Audit",
      description: "Comprehensive analysis of your current SEO performance"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom roadmap aligned with your business goals"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Technical optimization and content development"
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "Continuous tracking and performance optimization"
    },
    {
      step: "05",
      title: "Scale & Growth",
      description: "Expanding reach and maximizing ROI"
    }
  ];

  const seoTools = [
    "Ahrefs", "SEMrush", "Google Search Console", "Google Analytics 4",
    "Screaming Frog", "PageSpeed Insights", "Google Tag Manager",
    "Majestic", "Moz Pro", "DeepCrawl", "Botify", "Sitebulb",
    "RankMath", "Yoast SEO", "Screaming Frog", "BuzzSumo",
    "AnswerThePublic", "Ubersuggest", "SpyFu", "SerpStat"
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'opsoraagency@gmail.com',
          subject: `SEO Services Inquiry - Comprehensive Audit Request`,
          html: `
            <h2>New SEO Services Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Website:</strong> ${data.website}</p>
            <p><strong>Monthly Budget:</strong> ${data.budget}</p>
            <p><strong>Primary Goal:</strong> ${data.goal}</p>
            <p><em>Submitted from SEO Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your audit request has been received. Our SEO team will contact you within 24 hours with preliminary insights.');
        
        setTimeout(() => {
          setSubmitStatus(null);
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(responseData.error || 'Submission failed. Please email opsoraagency@gmail.com directly.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                ENTERPRISE SEO SOLUTIONS
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Data-Driven SEO for
              <span className="block font-semibold text-primary mt-2">Sustainable Business Growth</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We architect organic growth strategies that deliver measurable ROI. Not just rankings—revenue.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#strategy-session"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Schedule Strategy Session
              </a>
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Book Service Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
              Measurable Results
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {resultsMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {metric.label}
                </div>
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
                Comprehensive SEO Framework
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Six-phase methodology for sustainable organic growth
              </p>
            </div>
            
            <div className="space-y-12">
              {seoServices.map((service, index) => (
                <div key={index} className="border-l-2 border-primary pl-6 md:pl-8">
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <span className="text-xl font-bold text-primary">{service.step}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  
                  <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Expected Outcome:
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {service.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
                Our 5-Step Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Structured approach to guaranteed results
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {seoProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-2xl font-bold text-primary">{process.step}</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack - Scrolling Marquee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
              Technology Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Industry-leading tools we leverage
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900"></div>
            
            {/* Scrolling Container */}
            <div className="animate-scroll flex space-x-12 py-6">
              {[...seoTools, ...seoTools].map((tool, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="rounded-lg border border-gray-200 bg-white px-8 py-4 dark:border-gray-700 dark:bg-gray-800">
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      {tool}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-50% - 1.5rem));
                }
              }
              .animate-scroll {
                animation: scroll 40s linear infinite;
                width: max-content;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Audit Form */}
      <section id="strategy-session" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free Comprehensive SEO Audit
              </h2>
              <p className="text-gray-300">
                Receive a detailed analysis of your current SEO performance and growth opportunities
              </p>
            </div>
            
            {submitMessage && (
              <div className={`mx-auto mb-8 max-w-2xl rounded border-l-4 p-4 ${
                submitStatus === 'success' 
                  ? 'border-green-500 bg-green-900/20 text-green-300' 
                  : 'border-red-500 bg-red-900/20 text-red-300'
              }`}>
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Website URL *
                </label>
                <input
                  type="url"
                  name="website"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Primary SEO Goal
                  </label>
                  <select
                    name="goal"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select primary goal</option>
                    <option value="traffic">Increase organic traffic</option>
                    <option value="leads">Generate more leads</option>
                    <option value="sales">Increase online sales</option>
                    <option value="branding">Build brand authority</option>
                    <option value="local">Dominate local search</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Monthly Budget
                  </label>
                  <select
                    name="budget"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select budget range</option>
                    <option value="1-2k">$1,000 - $2,000</option>
                    <option value="2-5k">$2,000 - $5,000</option>
                    <option value="5-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Request Comprehensive Audit'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a detailed 25+ point SEO analysis within 48 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
              Ready to Transform Your Organic Growth?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with a team that delivers measurable results, not just promises.
            </p>
            
            <div className="mb-12">
              <a
                href="tel:+918401765505"
                className="inline-block text-2xl font-semibold text-primary hover:underline"
              >
                +91 8401765505
              </a>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Book Service Now
              </Link>
              <a
                href="mailto:opsoraagency@gmail.com"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">No Contracts</div>
                  <div className="text-gray-500 dark:text-gray-400">Month-to-month flexibility</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Transparent Pricing</div>
                  <div className="text-gray-500 dark:text-gray-400">Clear monthly investment</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Dedicated Team</div>
                  <div className="text-gray-500 dark:text-gray-400">Assigned SEO specialists</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">30-Day Onboarding</div>
                  <div className="text-gray-500 dark:text-gray-400">Comprehensive setup</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOServicesPage;