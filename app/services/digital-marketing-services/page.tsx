'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const DigitalMarketingServicesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const marketingServices = [
    {
      step: "01",
      title: "Search Engine Optimization (SEO)",
      description: "Improve organic search rankings and drive qualified traffic to your website through comprehensive SEO services.",
      features: [
        "Technical SEO & Site Audits",
        "Keyword Research & Strategy",
        "Local SEO Optimization",
        "Content & Link Building"
      ],
      outcome: "Increased organic visibility and sustainable traffic growth",
      readMoreLink: "/services/digital-marketing-services/seo"
    },
    {
      step: "02",
      title: "PPC & Paid Advertising",
      description: "Drive immediate traffic and conversions with expertly managed Google Ads, Meta Ads, and LinkedIn campaigns.",
      features: [
        "Google Search & Display Ads",
        "Meta (Facebook/Instagram) Ads",
        "LinkedIn & Twitter Advertising",
        "Remarketing & Conversion Tracking"
      ],
      outcome: "Immediate results with measurable ROI and performance optimization",
      readMoreLink: "/services/digital-marketing-services/GoogleAds"
    },
    {
      step: "03",
      title: "Social Media Marketing",
      description: "Build brand awareness, engage your audience, and drive conversions through strategic social media campaigns.",
      features: [
        "Content Strategy & Calendar",
        "Community Management",
        "Paid Social Campaigns",
        "Analytics & Performance Reports"
      ],
      outcome: "Enhanced brand presence and increased audience engagement",
      readMoreLink: "/services/digital-marketing-services/SocialMediaMarketing"
    },
    {
      step: "04",
      title: "Content Marketing",
      description: "Attract, engage, and retain customers through valuable, relevant, and consistent content that drives business growth.",
      features: [
        "SEO-Optimized Blog Writing",
        "Video Production & Editing",
        "Infographics & Visual Content",
        "Content Distribution Strategy"
      ],
      outcome: "Establish thought leadership and build customer trust",
      readMoreLink: "/services/digital-marketing-services/ContentMarketing"
    },
    {
      step: "05",
      title: "Email Marketing",
      description: "Nurture leads, retain customers, and drive repeat business with targeted email marketing campaigns.",
      features: [
        "Automated Workflow Design",
        "List Segmentation",
        "A/B Testing & Optimization",
        "Performance Analytics"
      ],
      outcome: "Improved customer retention and increased lifetime value",
      readMoreLink: "/services/digital-marketing-services/email-marketing"
    }
  ];

  const resultsMetrics = [
    { value: "40%+", label: "ROI Increase", description: "Average for our clients" },
    { value: "24/7", label: "Campaign Monitoring", description: "Real-time optimization" },
    { value: "100%", label: "Transparent Reporting", description: "Clear performance metrics" },
    { value: "360°", label: "Full-Stack Approach", description: "End-to-end solutions" }
  ];

  const whyChooseUs = [
    {
      title: "Data-Driven Strategy",
      description: "Decisions based on real analytics and performance metrics. We use data to inform every campaign decision, ensuring maximum ROI.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Full-Stack Expertise",
      description: "End-to-end solutions from strategy to execution. We handle everything from initial planning to final implementation and optimization.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Transparent Reporting",
      description: "Clear ROI measurement and performance tracking. You'll always know exactly how your campaigns are performing and what your ROI is.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Proven Results",
      description: "Track record of successful campaigns across industries. We've helped businesses of all sizes achieve their digital marketing goals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  const marketingProcess = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Campaign goals and audience analysis"
    },
    {
      step: "02",
      title: "Channel Selection",
      description: "Platform and approach determination"
    },
    {
      step: "03",
      title: "Execution & Launch",
      description: "Campaign implementation"
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Performance tracking and adjustments"
    },
    {
      step: "05",
      title: "Reporting & Analysis",
      description: "Results measurement and insights"
    }
  ];

  // All tools from your details
  const allMarketingTools = [
    // AI & Content Tools
    "OpenAI GPT-4", "Claude AI", "Google Bard", "Jasper AI",
    // SEO & Analytics
    "Google Analytics 4", "SEMrush", "Ahrefs", "Google Search Console",
    // Advertising Platforms
    "Google Ads", "Meta Ads Manager", "LinkedIn Campaigns", "Twitter Ads",
    // Marketing Automation
    "HubSpot CRM", "Mailchimp", "ActiveCampaign", "Zapier"
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
          subject: `Digital Marketing Services Inquiry - Consultation Request`,
          html: `
            <h2>New Digital Marketing Services Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Primary Goal:</strong> ${data.goal}</p>
            <p><strong>Company Size:</strong> ${data.companySize}</p>
            <p><em>Submitted from Digital Marketing Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your digital marketing consultation request has been received. Our marketing experts will contact you within 24 hours with preliminary insights.');
        
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                COMPREHENSIVE DIGITAL MARKETING
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Drive Growth & Maximize ROI
              <span className="block font-semibold text-primary mt-2">with Data-Driven Digital Marketing</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              At Opsora Agency, we deliver comprehensive digital marketing solutions designed to drive growth, increase visibility, and maximize ROI. Our data-driven approach combines strategy, execution, and optimization across all key digital channels.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#marketing-consultation"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Get Free Strategy Session
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
              Measurable Impact
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

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
                Why Choose Our Digital Marketing Services?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We combine expertise, technology, and proven methodologies to deliver exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="border-l-2 border-primary pl-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <div className="text-primary">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
                Our Digital Marketing Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive solutions tailored to your business goals
              </p>
            </div>
            
            <div className="space-y-12">
              {marketingServices.map((service, index) => (
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
                  
                  <div className="mb-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      Expected Outcome:
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {service.outcome}
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="mt-6">
                    <Link
                      href={service.readMoreLink}
                      className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      <span>Read More</span>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
                Our 5-Step Marketing Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Structured approach to marketing success
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {marketingProcess.map((process, index) => (
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

      {/* Tools & Technologies - Scrolling Marquee */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
              Tools & Technologies We Use
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We leverage industry-leading tools and platforms to build robust digital marketing solutions
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent"></div>
            
            {/* Scrolling Container */}
            <div className="animate-scroll flex space-x-8 py-6">
              {[...allMarketingTools, ...allMarketingTools].map((tool, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="rounded-lg border border-gray-200 bg-white px-6 py-3 dark:border-gray-700 dark:bg-gray-800">
                    <span className="text-base font-medium text-gray-900 dark:text-white">
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
                  transform: translateX(calc(-50% - 1rem));
                }
              }
              .animate-scroll {
                animation: scroll 30s linear infinite;
                width: max-content;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>

          {/* Tool Categories */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">AI & Content Tools</h4>
              <div className="space-y-2">
                {allMarketingTools.slice(0, 4).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">SEO & Analytics</h4>
              <div className="space-y-2">
                {allMarketingTools.slice(4, 8).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Advertising Platforms</h4>
              <div className="space-y-2">
                {allMarketingTools.slice(8, 12).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Marketing Automation</h4>
              <div className="space-y-2">
                {allMarketingTools.slice(12, 16).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8">
              <svg className="mx-auto h-12 w-12 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            
            <blockquote className="mb-10 text-2xl font-light text-gray-900 dark:text-white md:text-3xl">
              "Our digital marketing strategies are tailored to your specific business goals, whether you're looking to increase brand awareness, generate leads, or drive sales. We combine data-driven insights with creative execution to deliver measurable results."
            </blockquote>
            
            <div className="text-gray-600 dark:text-gray-300">
              <p className="text-lg font-medium">— Opsora Agency Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Consultation Form */}
      <section id="marketing-consultation" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free Marketing Strategy Session
              </h2>
              <p className="text-gray-300">
                Discover how our digital marketing solutions can transform your business
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
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your Company Name"
                  />
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Industry *
                  </label>
                  <select
                    name="industry"
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select your industry</option>
                    <option value="saas">SaaS & Technology</option>
                    <option value="ecommerce">E-commerce & Retail</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Primary Goal
                  </label>
                  <select
                    name="goal"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select main goal</option>
                    <option value="awareness">Increase Brand Awareness</option>
                    <option value="leads">Generate More Leads</option>
                    <option value="sales">Drive Sales & Revenue</option>
                    <option value="traffic">Increase Website Traffic</option>
                    <option value="engagement">Improve Social Media Engagement</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Current Monthly Marketing Budget
                </label>
                <select className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">Select budget range</option>
                  <option value="0-1k">Less than $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k+">More than $25,000</option>
                </select>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Tell us about your current marketing efforts
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Briefly describe your current marketing efforts and what you hope to achieve..."
                />
              </div>
              
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Request Free Strategy Session'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a personalized digital marketing strategy within 48 hours
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
              Ready to Transform Your Digital Marketing?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with digital marketing experts who understand how to drive growth, increase visibility, and maximize ROI across all key channels.
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
                href="mailto:opsoraagency@gmail.com?subject=Digital%20Marketing%20Services%20Inquiry&body=Hello%20Opsora%20Team,%0A%0AI%27m%20interested%20in%20your%20Digital%20Marketing%20services.%20Please%20send%20me%20more%20information.%0A%0AThanks,"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">SEO</div>
                  <div className="text-gray-500 dark:text-gray-400">Organic traffic growth</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">PPC</div>
                  <div className="text-gray-500 dark:text-gray-400">Immediate results & ROI</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Social Media</div>
                  <div className="text-gray-500 dark:text-gray-400">Brand engagement</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Content Marketing</div>
                  <div className="text-gray-500 dark:text-gray-400">Value-driven marketing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingServicesPage;