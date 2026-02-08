'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const MetaAdsServicesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const metaAdsServices = [
    {
      step: "01",
      title: "Audience Targeting Strategy",
      description: "Precision targeting across Facebook and Instagram to reach your ideal customers.",
      features: [
        "Custom audience creation",
        "Lookalike audience development",
        "Interest & behavior targeting",
        "Demographic segmentation",
        "Retargeting campaign setup",
        "Audience exclusion strategies"
      ],
      outcome: "Highly targeted reach to your most valuable potential customers"
    },
    {
      step: "02",
      title: "Ad Creative Design & Development",
      description: "Engaging visual and video content optimized for Facebook and Instagram platforms.",
      features: [
        "Ad creative design",
        "Video content production",
        "Carousel ad development",
        "Story ad optimization",
        "Brand consistency maintenance",
        "Platform-specific formatting"
      ],
      outcome: "High-performing ads that capture attention and drive engagement"
    },
    {
      step: "03",
      title: "Campaign Management & Optimization",
      description: "Strategic campaign setup and continuous optimization for maximum performance.",
      features: [
        "Campaign structure setup",
        "Budget allocation strategy",
        "Bid strategy optimization",
        "Placement optimization",
        "Schedule optimization",
        "Performance monitoring"
      ],
      outcome: "Efficient campaigns that maximize results within budget constraints"
    },
    {
      step: "04",
      title: "A/B Testing & Experimentation",
      description: "Systematic testing of ad elements to identify top-performing variations.",
      features: [
        "Ad copy testing",
        "Creative variation testing",
        "Audience segment testing",
        "Landing page testing",
        "Call-to-action testing",
        "Results analysis & implementation"
      ],
      outcome: "Data-driven decisions that continuously improve campaign performance"
    },
    {
      step: "05",
      title: "Performance Analysis & Reporting",
      description: "Comprehensive tracking and analysis of campaign metrics and ROI.",
      features: [
        "KPI tracking setup",
        "Conversion tracking implementation",
        "ROI analysis & reporting",
        "Performance dashboard creation",
        "Competitor benchmarking",
        "Monthly performance reports"
      ],
      outcome: "Clear insights into campaign effectiveness and return on investment"
    },
    {
      step: "06",
      title: "Conversion Optimization & Scaling",
      description: "Strategic scaling of successful campaigns while maintaining profitability.",
      features: [
        "Conversion rate optimization",
        "Campaign scaling strategy",
        "Budget optimization",
        "Audience expansion",
        "Creative refresh strategy",
        "Performance forecasting"
      ],
      outcome: "Sustainable growth and maximum return on ad spend"
    }
  ];

  const resultsMetrics = [
    { value: "4-6X", label: "ROI Average", description: "Return on ad spend" },
    { value: "50%", label: "Cost Reduction", description: "Average CPM reduction" },
    { value: "4.9", label: "Client Satisfaction", description: "Based on reviews" },
    { value: "90%", label: "Retention Rate", description: "Long-term partnerships" }
  ];

  const metaAdsProcess = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Comprehensive campaign strategy development"
    },
    {
      step: "02",
      title: "Audience Building",
      description: "Target audience research and segmentation"
    },
    {
      step: "03",
      title: "Creative Development",
      description: "Ad design and content creation"
    },
    {
      step: "04",
      title: "Campaign Launch",
      description: "Campaign setup and optimization"
    },
    {
      step: "05",
      title: "Analysis & Scaling",
      description: "Performance review and campaign scaling"
    }
  ];

  const metaAdsTools = [
    "Meta Ads Manager", "Meta Business Suite", "Facebook Pixel", "Instagram Ads",
    "Canva", "Adobe Creative Cloud", "Figma", "Vimeo",
    "Loomly", "SocialPilot", "AdEspresso", "Revealbot",
    "Hootsuite", "Buffer", "Sprout Social", "Agorapulse",
    "Google Analytics 4", "Hotjar", "Microsoft Clarity", "Optimizely"
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
          subject: `Meta Ads (Facebook/Instagram) Services Inquiry - Free Audit Request`,
          html: `
            <h2>New Meta Ads Services Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Website:</strong> ${data.website}</p>
            <p><strong>Monthly Budget:</strong> ${data.budget}</p>
            <p><strong>Primary Goal:</strong> ${data.goal}</p>
            <p><em>Submitted from Meta Ads Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your Meta Ads audit request has been received. Our Facebook/Instagram ads team will contact you within 24 hours with preliminary insights.');
        
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
                PROFESSIONAL META ADS MANAGEMENT
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Reach Your Target Audience with
              <span className="block font-semibold text-primary mt-2">Precision-Targeted Advertising</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We create high-converting Facebook and Instagram ad campaigns that deliver measurable results through strategic targeting and compelling creative.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#meta-audit"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Get Free Meta Ads Audit
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
                Comprehensive Meta Ads Framework
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Six-phase methodology for profitable Facebook and Instagram campaigns
              </p>
            </div>
            
            <div className="space-y-12">
              {metaAdsServices.map((service, index) => (
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
                Our 5-Step Meta Ads Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Structured approach to social media advertising success
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {metaAdsProcess.map((process, index) => (
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
              {[...metaAdsTools, ...metaAdsTools].map((tool, index) => (
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

      {/* Meta Ads Audit Form */}
      <section id="meta-audit" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free Meta Ads Audit
              </h2>
              <p className="text-gray-300">
                Get a comprehensive analysis of your current Facebook and Instagram ads performance
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
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Primary Advertising Goal
                  </label>
                  <select
                    name="goal"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select primary goal</option>
                    <option value="awareness">Brand Awareness</option>
                    <option value="engagement">Engagement & Reach</option>
                    <option value="traffic">Website Traffic</option>
                    <option value="leads">Lead Generation</option>
                    <option value="conversions">Conversions & Sales</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Monthly Ad Budget
                  </label>
                  <select
                    name="budget"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select budget range</option>
                    <option value="500-1k">$500 - $1,000</option>
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
                  {isSubmitting ? 'Processing...' : 'Get Free Meta Ads Audit'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a detailed Facebook & Instagram ads analysis within 48 hours
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
              Ready to Reach Your Ideal Audience?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with Meta Ads experts who understand how to connect with your target audience and drive meaningful results on Facebook and Instagram.
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
                href="mailto:opsoraagency@gmail.com?subject=Meta%20Ads%20Services%20Inquiry&body=Hello%20Opsora%20Team,%0A%0AI%27m%20interested%20in%20your%20Meta%20Ads%20(Facebook/Instagram)%20services.%20Please%20send%20me%20more%20information.%0A%0AThanks,"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Precision Targeting</div>
                  <div className="text-gray-500 dark:text-gray-400">Audience segmentation</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Creative Design</div>
                  <div className="text-gray-500 dark:text-gray-400">Professional ad creation</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Daily Optimization</div>
                  <div className="text-gray-500 dark:text-gray-400">Continuous performance improvement</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Transparent Reporting</div>
                  <div className="text-gray-500 dark:text-gray-400">Clear ROI tracking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MetaAdsServicesPage;