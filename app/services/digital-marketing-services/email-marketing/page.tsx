'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const EmailMarketingServicesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const emailServices = [
    {
      step: "01",
      title: "Email List Building & Segmentation",
      description: "Strategic list growth and segmentation to build targeted, engaged subscriber audiences.",
      features: [
        "Lead magnet creation & optimization",
        "Opt-in form design & placement",
        "List segmentation strategy",
        "Lead nurturing sequences",
        "List hygiene & maintenance",
        "Compliance & permission management"
      ],
      outcome: "Growing, targeted email list of engaged subscribers"
    },
    {
      step: "02",
      title: "Email Template Design & Development",
      description: "Professionally designed email templates that are responsive and brand-aligned.",
      features: [
        "Custom email template design",
        "Mobile-responsive optimization",
        "Brand consistency implementation",
        "Template library creation",
        "A/B testing templates",
        "Email accessibility compliance"
      ],
      outcome: "Professional, high-converting email templates that reflect your brand"
    },
    {
      step: "03",
      title: "Automation Workflow Development",
      description: "Intelligent automation sequences that nurture leads and engage customers automatically.",
      features: [
        "Welcome series automation",
        "Lead nurturing sequences",
        "Cart abandonment flows",
        "Customer onboarding workflows",
        "Re-engagement campaigns",
        "Behavior-triggered automation"
      ],
      outcome: "Automated customer journeys that increase conversions and retention"
    },
    {
      step: "04",
      title: "Campaign A/B Testing & Optimization",
      description: "Systematic testing and optimization to maximize email campaign performance.",
      features: [
        "Subject line testing",
        "Email content optimization",
        "Send time optimization",
        "CTA testing & optimization",
        "Design element testing",
        "Performance analysis & implementation"
      ],
      outcome: "Data-driven email optimization for maximum engagement and conversions"
    },
    {
      step: "05",
      title: "Performance Analytics & Reporting",
      description: "Comprehensive tracking and analysis of email marketing metrics and ROI.",
      features: [
        "Campaign performance tracking",
        "Conversion rate analysis",
        "ROI calculation & reporting",
        "Subscriber behavior analysis",
        "Deliverability monitoring",
        "Monthly performance reports"
      ],
      outcome: "Clear insights into email performance and measurable ROI"
    },
    {
      step: "06",
      title: "Personalization & Dynamic Content",
      description: "Advanced personalization techniques to deliver relevant content to each subscriber.",
      features: [
        "Dynamic content implementation",
        "Personalized product recommendations",
        "Behavior-based content triggers",
        "Segmented content delivery",
        "Personalized subject lines",
        "Customized customer journeys"
      ],
      outcome: "Highly personalized email experiences that drive engagement and loyalty"
    }
  ];

  const resultsMetrics = [
    { value: "25-40%", label: "Open Rate", description: "Industry-leading average" },
    { value: "3-5%", label: "Click Rate", description: "Above industry average" },
    { value: "4.9", label: "Client Satisfaction", description: "Based on reviews" },
    { value: "90%", label: "Retention Rate", description: "Long-term partnerships" }
  ];

  const emailProcess = [
    {
      step: "01",
      title: "Strategy & Planning",
      description: "Email marketing strategy development"
    },
    {
      step: "02",
      title: "List Building",
      description: "Audience growth and segmentation"
    },
    {
      step: "03",
      title: "Campaign Creation",
      description: "Email design and content development"
    },
    {
      step: "04",
      title: "Automation Setup",
      description: "Workflow and sequence implementation"
    },
    {
      step: "05",
      title: "Analysis & Optimization",
      description: "Performance tracking and improvement"
    }
  ];

  const emailTools = [
    "Mailchimp", "Klaviyo", "ActiveCampaign", "ConvertKit",
    "HubSpot", "SendinBlue", "GetResponse", "Campaign Monitor",
    "MailerLite", "Constant Contact", "Drip", "Omnisend",
    "Google Analytics", "Hotjar", "Zapier", "Make.com",
    "Unbounce", "Leadpages", "OptinMonster", "Sumo"
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
          subject: `Email Marketing Services Inquiry - Strategy Session Request`,
          html: `
            <h2>New Email Marketing Services Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Website:</strong> ${data.website}</p>
            <p><strong>Current List Size:</strong> ${data.listSize}</p>
            <p><strong>Primary Goal:</strong> ${data.goal}</p>
            <p><em>Submitted from Email Marketing Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your email marketing strategy request has been received. Our email marketing team will contact you within 24 hours with preliminary insights.');
        
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
                PROFESSIONAL EMAIL MARKETING
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Nurture Leads & Retain Customers with
              <span className="block font-semibold text-primary mt-2">Personalized Email Campaigns</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We create automated email marketing campaigns that build relationships, drive conversions, and maximize customer lifetime value through strategic personalization and automation.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#email-strategy"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Get Email Strategy
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
                Comprehensive Email Marketing Framework
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Six-phase methodology for effective email marketing campaigns
              </p>
            </div>
            
            <div className="space-y-12">
              {emailServices.map((service, index) => (
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
                Our 5-Step Email Marketing Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Structured approach to email marketing success
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {emailProcess.map((process, index) => (
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
              Industry-leading email marketing tools we leverage
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900"></div>
            
            {/* Scrolling Container */}
            <div className="animate-scroll flex space-x-12 py-6">
              {[...emailTools, ...emailTools].map((tool, index) => (
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

      {/* Email Strategy Form */}
      <section id="email-strategy" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free Email Marketing Strategy Session
              </h2>
              <p className="text-gray-300">
                Get a comprehensive email marketing analysis and growth strategy for your business
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
                    Primary Email Goal
                  </label>
                  <select
                    name="goal"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select primary goal</option>
                    <option value="nurturing">Lead Nurturing</option>
                    <option value="conversions">Sales Conversions</option>
                    <option value="retention">Customer Retention</option>
                    <option value="engagement">Audience Engagement</option>
                    <option value="awareness">Brand Awareness</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Current Email List Size
                  </label>
                  <select
                    name="listSize"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select list size</option>
                    <option value="0-500">0 - 500 subscribers</option>
                    <option value="500-5k">500 - 5,000 subscribers</option>
                    <option value="5k-50k">5,000 - 50,000 subscribers</option>
                    <option value="50k+">50,000+ subscribers</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Get Email Strategy'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a customized email marketing strategy within 48 hours
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
              Ready to Transform Your Email Marketing?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with email marketing experts who understand how to build relationships, drive conversions, and maximize customer lifetime value through strategic automation and personalization.
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
                href="mailto:opsoraagency@gmail.com?subject=Email%20Marketing%20Services%20Inquiry&body=Hello%20Opsora%20Team,%0A%0AI%27m%20interested%20in%20your%20Email%20Marketing%20services.%20Please%20send%20me%20more%20information.%0A%0AThanks,"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Automation Workflows</div>
                  <div className="text-gray-500 dark:text-gray-400">Intelligent customer journeys</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Personalization</div>
                  <div className="text-gray-500 dark:text-gray-400">Dynamic, relevant content</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">A/B Testing</div>
                  <div className="text-gray-500 dark:text-gray-400">Continuous optimization</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Performance Analytics</div>
                  <div className="text-gray-500 dark:text-gray-400">ROI tracking & reporting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketingServicesPage;