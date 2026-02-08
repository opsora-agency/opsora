'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const CustomAIAgentsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const customAIServices = [
    {
      step: "01",
      title: "Requirement Analysis & Strategy",
      description: "In-depth analysis of your business needs, workflows, and processes to design custom AI solutions that deliver maximum value.",
      features: [
        "Business process mapping",
        "Workflow analysis & optimization",
        "ROI assessment & feasibility study",
        "Technical requirement specification",
        "Stakeholder alignment workshops",
        "Project roadmap development"
      ],
      outcome: "Clear AI implementation strategy aligned with business objectives"
    },
    {
      step: "02",
      title: "Custom AI Model Training",
      description: "Tailored AI model development using your data, industry knowledge, and specific business logic for optimal performance.",
      features: [
        "Domain-specific data collection",
        "Custom model architecture design",
        "Proprietary data training pipelines",
        "Industry-specific fine-tuning",
        "Performance benchmarking",
        "Continuous learning systems"
      ],
      outcome: "AI models that understand your business context and terminology"
    },
    {
      step: "03",
      title: "API & System Integration",
      description: "Seamless integration of AI solutions with your existing software stack, databases, and business applications.",
      features: [
        "REST API development",
        "Legacy system integration",
        "Real-time data synchronization",
        "Third-party platform connectors",
        "Custom webhook implementation",
        "Secure authentication systems"
      ],
      outcome: "Smooth integration that works with your current technology ecosystem"
    },
    {
      step: "04",
      title: "Ongoing Maintenance & Support",
      description: "Comprehensive maintenance, monitoring, and optimization services to ensure your AI solutions perform at peak efficiency.",
      features: [
        "24/7 system monitoring",
        "Performance optimization updates",
        "Regular model retraining",
        "Security patch management",
        "User feedback implementation",
        "Scalability adjustments"
      ],
      outcome: "Reliable, up-to-date AI solutions with minimal downtime"
    },
    {
      step: "05",
      title: "Scalable Solution Architecture",
      description: "Future-proof AI infrastructure designed to grow with your business and adapt to changing requirements.",
      features: [
        "Modular architecture design",
        "Horizontal scaling capabilities",
        "Load balancing optimization",
        "Multi-tenant support",
        "Disaster recovery planning",
        "Performance optimization"
      ],
      outcome: "AI solutions that scale seamlessly with your business growth"
    },
    {
      step: "06",
      title: "Intelligent Chatbot Development",
      description: "Advanced conversational AI agents that understand context, handle complex queries, and provide personalized interactions.",
      features: [
        "Natural language understanding",
        "Context-aware conversations",
        "Multi-channel deployment",
        "Human handoff capabilities",
        "Sentiment analysis",
        "Personalization engines"
      ],
      outcome: "Engaging, intelligent chatbots that enhance customer and employee experiences"
    }
  ];

  const resultsMetrics = [
    { value: "60%", label: "Process Efficiency", description: "Workflow automation improvement" },
    { value: "75%", label: "Custom Fit", description: "Tailored to specific business needs" },
    { value: "4.9", label: "Client Satisfaction", description: "Based on custom projects" },
    { value: "50%", label: "Development Time", description: "Faster than building from scratch" }
  ];

  const customAIProcess = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Business needs and workflow assessment"
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Custom AI architecture planning"
    },
    {
      step: "03",
      title: "Development & Training",
      description: "Custom model building and training"
    },
    {
      step: "04",
      title: "Integration & Testing",
      description: "System integration and validation"
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Launch and ongoing maintenance"
    }
  ];

  const customAITools = [
    "OpenAI", "Google AI", "Microsoft Azure AI", "Amazon SageMaker",
    "Hugging Face", "TensorFlow", "PyTorch", "LangChain",
    "LlamaIndex", "FastAPI", "Docker", "Kubernetes",
    "PostgreSQL", "MongoDB", "Redis", "Elasticsearch",
    "React", "Next.js", "Node.js", "Python",
    "GraphQL", "WebSockets", "OAuth", "JWT"
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
          subject: `Custom AI Agents Inquiry - Consultation Request`,
          html: `
            <h2>New Custom AI Agents Services Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Current Systems:</strong> ${data.currentSystems}</p>
            <p><strong>Company Size:</strong> ${data.companySize}</p>
            <p><em>Submitted from Custom AI Agents Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your custom AI consultation request has been received. Our AI solutions team will contact you within 24 hours with preliminary insights.');
        
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
      <section className="relative overflow-hidden pt-32 pb-20 md:pt=40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                CUSTOM AI SOLUTIONS & AUTOMATION
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Build Custom AI Solutions Tailored to Your Business
              <span className="block font-semibold text-primary mt-2">with Intelligent AI Agents & Chatbots</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We design and develop custom AI agents, automation systems, and chatbots that align perfectly with your specific business needs, workflows, and objectives.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#custom-ai-consultation"
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
                Comprehensive Custom AI Framework
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Six-phase methodology for developing tailored AI solutions
              </p>
            </div>
            
            <div className="space-y-12">
              {customAIServices.map((service, index) => (
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
                Our 5-Step Custom AI Implementation
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Structured approach to custom AI development success
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {customAIProcess.map((process, index) => (
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
              Cutting-edge AI and development technologies we leverage
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900"></div>
            
            {/* Scrolling Container */}
            <div className="animate-scroll flex space-x-12 py-6">
              {[...customAITools, ...customAITools].map((tool, index) => (
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

      {/* Custom AI Consultation Form */}
      <section id="custom-ai-consultation" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free Custom AI Consultation
              </h2>
              <p className="text-gray-300">
                Discover how custom AI agents and automation can transform your specific business processes
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
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="finance">Financial Services</option>
                    <option value="consulting">Consulting & Professional Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="nonprofit">Non-Profit</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Current Systems
                  </label>
                  <select
                    name="currentSystems"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select your current systems</option>
                    <option value="crm">CRM Systems</option>
                    <option value="erp">ERP Systems</option>
                    <option value="cms">CMS Platforms</option>
                    <option value="custom">Custom Software</option>
                    <option value="multiple">Multiple Systems</option>
                    <option value="none">No Current Systems</option>
                    <option value="other">Other Systems</option>
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
              
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Book AI Consultation'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a personalized custom AI strategy within 48 hours
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
              Ready to Build Your Custom AI Solution?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with AI experts who understand how to create tailored solutions that fit your unique business needs, workflows, and objectives.
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
                href="mailto:opsoraagency@gmail.com?subject=Custom%20AI%20Agents%20Services%20Inquiry&body=Hello%20Opsora%20Team,%0A%0AI%27m%20interested%20in%20your%20Custom%20AI%20Agents%20services.%20Please%20send%20me%20more%20information.%0A%0AThanks,"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Requirement Analysis</div>
                  <div className="text-gray-500 dark:text-gray-400">Tailored business needs assessment</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Custom Training</div>
                  <div className="text-gray-500 dark:text-gray-400">Domain-specific AI model development</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">API Integration</div>
                  <div className="text-gray-500 dark:text-gray-400">Seamless system connectivity</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Scalable Solutions</div>
                  <div className="text-gray-500 dark:text-gray-400">Future-proof architecture design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomAIAgentsPage;