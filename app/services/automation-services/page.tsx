'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const AIAutomationServicesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const automationServices = [
    {
      step: "01",
      title: "AI Workflow Automation",
      description: "Automate repetitive business processes with intelligent workflow systems that learn and adapt to your operations.",
      features: [
        "Process Mapping & Analysis",
        "Custom Automation Scripts",
        "Tool Integration & APIs",
        "Performance Monitoring"
      ],
      outcome: "Streamlined operations with reduced manual effort and increased efficiency",
      readMoreLink: "/services/automation-services/ai-workflow-automation"
    },
    {
      step: "02",
      title: "AI-Powered Chatbots",
      description: "Deploy intelligent conversational agents that provide instant, accurate responses to customer inquiries across all channels.",
      features: [
        "Natural Language Processing",
        "Multi-Platform Deployment",
        "Knowledge Base Integration",
        "Live Agent Handoff"
      ],
      outcome: "Enhanced customer experience with 24/7 instant support availability",
      readMoreLink: "/services/automation-services/ai-chatbots"
    },
    {
      step: "03",
      title: "Sales AI Agents",
      description: "Accelerate your sales pipeline with AI agents that qualify leads, schedule meetings, and nurture prospects automatically.",
      features: [
        "Lead Qualification & Scoring",
        "Automated Outreach Sequences",
        "Meeting Scheduling Automation",
        "CRM Data Synchronization"
      ],
      outcome: "Increased sales productivity and improved lead conversion rates",
      readMoreLink: "/services/automation-services/sales-ai-agents"
    },
    {
      step: "04",
      title: "Support AI Agents",
      description: "Provide round-the-clock customer support with AI agents that resolve common issues instantly and escalate complex cases.",
      features: [
        "Ticketing System Integration",
        "Self-Service Troubleshooting",
        "Sentiment Analysis",
        "Knowledge Base Updates"
      ],
      outcome: "Faster resolution times and improved customer satisfaction metrics",
      readMoreLink: "/services/automation-services/support-ai-agent"
    },
    {
      step: "05",
      title: "Custom AI Agent Development",
      description: "Build specialized AI agents tailored to your unique business requirements and industry-specific challenges.",
      features: [
        "Requirement Analysis",
        "Custom Model Training",
        "Industry-Specific Solutions",
        "API Development & Integration"
      ],
      outcome: "Tailored AI solutions that address your specific business challenges",
      readMoreLink: "/services/automation-services/custom-ai-solutions"
    }
  ];

  const resultsMetrics = [
    { value: "70%", label: "Efficiency Gain", description: "Process automation improvement" },
    { value: "24/7", label: "Availability", description: "Round-the-clock AI support" },
    { value: "4.8", label: "Customer Satisfaction", description: "AI-assisted service rating" },
    { value: "50%", label: "Cost Reduction", description: "Operational cost savings" }
  ];

  const whyChooseUs = [
    {
      title: "Expert AI Implementation",
      description: "Specialized in cutting-edge AI technologies and deployment with proven expertise across various industries.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Seamless Integration",
      description: "Connect with your existing tools and workflows effortlessly, ensuring minimal disruption to your operations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security protocols for data protection, ensuring your business information remains secure and compliant.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "ROI-Focused Solutions",
      description: "Measurable business impact and performance tracking with clear ROI calculations and regular progress reports.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const aiProcess = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Business needs and process assessment"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Custom AI architecture planning"
    },
    {
      step: "03",
      title: "Development & Training",
      description: "AI model building and training"
    },
    {
      step: "04",
      title: "Integration & Testing",
      description: "System integration and validation"
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deployment and ongoing optimization"
    }
  ];

  // All tools from your details
  const allAITools = [
    // AI & LLMs
    "OpenAI GPT-4", "Claude AI", "Gemini", "LlamaIndex",
    // Automation Platforms
    "n8n", "Zapier", "Make.com", "LangChain",
    // CRM & Integration
    "HubSpot", "Pipedrive", "Zoho", "Salesforce",
    // Communication Tools
    "Slack", "WhatsApp Business", "Telegram API", "Microsoft Teams"
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
          subject: `AI & Automation Services Inquiry - Consultation Request`,
          html: `
            <h2>New AI & Automation Services Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Primary Challenge:</strong> ${data.challenge}</p>
            <p><strong>Company Size:</strong> ${data.companySize}</p>
            <p><em>Submitted from AI & Automation Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your AI & automation consultation request has been received. Our automation experts will contact you within 24 hours with preliminary insights.');
        
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
                INTELLIGENT AUTOMATION & AI SOLUTIONS
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Transform How Your Business Operates
              <span className="block font-semibold text-primary mt-2">with AI-Powered Automation Solutions</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              At Opsora Agency, we build intelligent automation solutions that transform how businesses operate. From AI-powered chatbots to sophisticated workflow automation, we help you reduce costs, increase efficiency, and deliver exceptional customer experiences 24/7.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#ai-consultation"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Get Free AI Consultation
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

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
                Why Choose Our AI & Automation Services?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We combine cutting-edge AI technology with practical business solutions
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
                Our Automation & AI Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive AI solutions for modern business challenges
              </p>
            </div>
            
            <div className="space-y-12">
              {automationServices.map((service, index) => (
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
                      Business Impact:
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
                Our 5-Step AI Implementation Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Structured approach to AI automation success
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {aiProcess.map((process, index) => (
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
              We leverage industry-leading tools and platforms to build robust AI and automation solutions
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent"></div>
            
            {/* Scrolling Container */}
            <div className="animate-scroll flex space-x-8 py-6">
              {[...allAITools, ...allAITools].map((tool, index) => (
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
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">AI & LLMs</h4>
              <div className="space-y-2">
                {allAITools.slice(0, 4).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Automation Platforms</h4>
              <div className="space-y-2">
                {allAITools.slice(4, 8).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">CRM & Integration</h4>
              <div className="space-y-2">
                {allAITools.slice(8, 12).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Communication Tools</h4>
              <div className="space-y-2">
                {allAITools.slice(12, 16).map((tool, index) => (
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
              "Our AI and automation solutions are designed to work alongside your human team, augmenting capabilities rather than replacing them. We create intelligent systems that learn, adapt, and grow with your business."
            </blockquote>
            
            <div className="text-gray-600 dark:text-gray-300">
              <p className="text-lg font-medium">— Opsora Agency Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Consultation Form */}
      <section id="ai-consultation" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free AI & Automation Consultation
              </h2>
              <p className="text-gray-300">
                Discover how intelligent automation can transform your business operations
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
                    Primary Challenge
                  </label>
                  <select
                    name="challenge"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select main challenge</option>
                    <option value="support">Customer Support Automation</option>
                    <option value="sales">Sales Process Automation</option>
                    <option value="operations">Operational Efficiency</option>
                    <option value="data">Data Processing & Analysis</option>
                    <option value="communication">Team Communication</option>
                    <option value="other">Other Challenge</option>
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
                  Current Automation Tools (if any)
                </label>
                <textarea
                  rows={3}
                  name="currentTools"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="List any current automation tools or systems you use..."
                />
              </div>
              
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Get Free AI Consultation'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a personalized automation strategy within 48 hours
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
              Ready to Automate Your Business?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with AI experts who understand how to build intelligent automation solutions that reduce costs, increase efficiency, and deliver exceptional customer experiences 24/7.
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
                href="mailto:opsoraagency@gmail.com?subject=AI%20%26%20Automation%20Services%20Inquiry&body=Hello%20Opsora%20Team,%0A%0AI%27m%20interested%20in%20your%20AI%20%26%20Automation%20services.%20Please%20send%20me%20more%20information.%0A%0AThanks,"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Workflow Automation</div>
                  <div className="text-gray-500 dark:text-gray-400">Process optimization</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">AI Chatbots</div>
                  <div className="text-gray-500 dark:text-gray-400">24/7 customer support</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Sales Automation</div>
                  <div className="text-gray-500 dark:text-gray-400">Lead generation & nurturing</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Custom AI Solutions</div>
                  <div className="text-gray-500 dark:text-gray-400">Tailored to your business</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomationServicesPage;