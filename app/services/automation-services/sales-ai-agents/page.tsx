'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const SalesAIAgentsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const salesAIServices = [
    {
      step: "01",
      title: "Lead Qualification & Scoring",
      description: "Intelligent lead scoring that prioritizes prospects based on engagement and buying signals.",
      features: [
        "Behavior-based lead scoring",
        "Engagement level analysis",
        "Buying intent detection",
        "Lead quality assessment",
        "Scoring model customization",
        "Real-time scoring updates"
      ],
      outcome: "Prioritized leads that maximize sales team efficiency"
    },
    {
      step: "02",
      title: "Automated Follow-up Sequences",
      description: "Intelligent follow-up sequences that nurture leads through the sales funnel automatically.",
      features: [
        "Multi-channel follow-up campaigns",
        "Timing optimization algorithms",
        "Personalized message sequences",
        "Response-triggered workflows",
        "A/B testing of messaging",
        "Sequence performance analytics"
      ],
      outcome: "Consistent lead nurturing that converts prospects into opportunities"
    },
    {
      step: "03",
      title: "CRM Integration & Synchronization",
      description: "Seamless integration with your existing CRM to maintain data consistency and workflow automation.",
      features: [
        "Real-time CRM data sync",
        "Contact & lead management",
        "Deal stage automation",
        "Activity logging automation",
        "Custom field integration",
        "Bidirectional data flow"
      ],
      outcome: "Unified sales system with automated data management"
    },
    {
      step: "04",
      title: "Performance Analytics & Optimization",
      description: "Comprehensive analytics dashboard to track AI agent performance and optimize sales processes.",
      features: [
        "Conversion rate tracking",
        "Lead source performance",
        "Response time analytics",
        "Pipeline velocity analysis",
        "ROI calculation & reporting",
        "Performance improvement recommendations"
      ],
      outcome: "Data-driven insights to continuously improve sales performance"
    },
    {
      step: "05",
      title: "Personalized Outreach Automation",
      description: "AI-powered personalization that delivers tailored messages at scale to engage prospects effectively.",
      features: [
        "Dynamic content personalization",
        "Company-specific messaging",
        "Industry-relevant insights",
        "Personalized timing optimization",
        "Multi-touchpoint coordination",
        "Personalization effectiveness tracking"
      ],
      outcome: "Highly relevant outreach that increases engagement and response rates"
    },
    {
      step: "06",
      title: "Appointment Setting Automation",
      description: "Intelligent scheduling systems that book qualified meetings directly into your calendar.",
      features: [
        "Calendar integration & sync",
        "Smart scheduling algorithms",
        "Time zone management",
        "Meeting confirmation automation",
        "Reminder & follow-up system",
        "Meeting quality scoring"
      ],
      outcome: "Automated meeting booking that fills your calendar with qualified prospects"
    }
  ];

  const resultsMetrics = [
    { value: "300%", label: "Lead Response", description: "Increase in response rates" },
    { value: "40%", label: "Time Saved", description: "Automation of sales tasks" },
    { value: "4.9", label: "Client Satisfaction", description: "Based on reviews" },
    { value: "25%", label: "Conversion Boost", description: "Increase in sales conversions" }
  ];

  const salesAIProcess = [
    {
      step: "01",
      title: "Sales Process Analysis",
      description: "Current sales workflow evaluation"
    },
    {
      step: "02",
      title: "AI Strategy Design",
      description: "Custom AI sales agent planning"
    },
    {
      step: "03",
      title: "Integration & Setup",
      description: "CRM and system integration"
    },
    {
      step: "04",
      title: "Training & Deployment",
      description: "AI model training and launch"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous performance improvement"
    }
  ];

  const salesAITools = [
    "OpenAI GPT", "Claude AI", "HubSpot", "Salesforce",
    "Pipedrive", "Zoho CRM", "Freshsales", "Close.io",
    "Outreach", "Salesloft", "Apollo", "LinkedIn Sales Navigator",
    "Calendly", "Chili Piper", "Cirrus Insight", "Gong",
    "ZoomInfo", "Clearbit", "Leadfeeder", "Mixmax"
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
          subject: `Sales AI Agents Inquiry - Consultation Request`,
          html: `
            <h2>New Sales AI Agents Services Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>CRM System:</strong> ${data.crm}</p>
            <p><strong>Team Size:</strong> ${data.teamSize}</p>
            <p><em>Submitted from Sales AI Agents Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your sales AI consultation request has been received. Our sales automation team will contact you within 24 hours with preliminary insights.');
        
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
                AI-POWERED SALES AUTOMATION
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Automate Lead Qualification & Follow-ups
              <span className="block font-semibold text-primary mt-2">with Intelligent Sales AI Agents</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We build AI sales agents that qualify leads, automate follow-ups, schedule appointments, and integrate seamlessly with your CRM to accelerate your sales pipeline 24/7.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#sales-ai-consultation"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Book AI Consultation
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
                Comprehensive Sales AI Framework
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Six-phase methodology for intelligent sales automation
              </p>
            </div>
            
            <div className="space-y-12">
              {salesAIServices.map((service, index) => (
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
                Our 5-Step Sales AI Implementation
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Structured approach to sales automation success
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {salesAIProcess.map((process, index) => (
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
              Industry-leading AI and sales tools we leverage
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900"></div>
            
            {/* Scrolling Container */}
            <div className="animate-scroll flex space-x-12 py-6">
              {[...salesAITools, ...salesAITools].map((tool, index) => (
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

      {/* Sales AI Consultation Form */}
      <section id="sales-ai-consultation" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free Sales AI Consultation
              </h2>
              <p className="text-gray-300">
                Discover how AI sales agents can transform your lead generation and qualification processes
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
                    <option value="b2b">B2B Services</option>
                    <option value="ecommerce">E-commerce & Retail</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="realestate">Real Estate</option>
                    <option value="consulting">Consulting & Professional Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Current CRM System
                  </label>
                  <select
                    name="crm"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select CRM system</option>
                    <option value="salesforce">Salesforce</option>
                    <option value="hubspot">HubSpot</option>
                    <option value="pipedrive">Pipedrive</option>
                    <option value="zoho">Zoho CRM</option>
                    <option value="freshsales">Freshsales</option>
                    <option value="close">Close</option>
                    <option value="none">No CRM Currently</option>
                    <option value="other">Other CRM</option>
                  </select>
                </div>
                
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Sales Team Size
                  </label>
                  <select
                    name="teamSize"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5 salespeople</option>
                    <option value="6-15">6-15 salespeople</option>
                    <option value="16-50">16-50 salespeople</option>
                    <option value="50+">50+ salespeople</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Book AI Consultation'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a personalized sales AI strategy within 48 hours
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
              Ready to Automate Your Sales Pipeline?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with AI experts who understand how to build intelligent sales agents that qualify leads, automate follow-ups, and accelerate revenue growth.
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
                href="mailto:opsoraagency@gmail.com?subject=Sales%20AI%20Agents%20Services%20Inquiry&body=Hello%20Opsora%20Team,%0A%0AI%27m%20interested%20in%20your%20Sales%20AI%20Agents%20services.%20Please%20send%20me%20more%20information.%0A%0AThanks,"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Lead Qualification</div>
                  <div className="text-gray-500 dark:text-gray-400">Intelligent scoring & prioritization</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Automated Follow-ups</div>
                  <div className="text-gray-500 dark:text-gray-400">Multi-channel nurturing sequences</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">CRM Integration</div>
                  <div className="text-gray-500 dark:text-gray-400">Seamless data synchronization</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Appointment Setting</div>
                  <div className="text-gray-500 dark:text-gray-400">Automated meeting scheduling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesAIAgentsPage;