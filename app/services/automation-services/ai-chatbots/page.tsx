'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const AIChatbotServicesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const chatbotServices = [
    {
      step: "01",
      title: "Natural Language Processing Integration",
      description: "Advanced AI models that understand and process human language naturally.",
      features: [
        "Context understanding & retention",
        "Intent recognition & classification",
        "Sentiment analysis integration",
        "Multilingual support setup",
        "Speech-to-text capabilities",
        "Conversation flow optimization"
      ],
      outcome: "Intelligent chatbot that understands customer queries naturally"
    },
    {
      step: "02",
      title: "Multi-platform Deployment & Integration",
      description: "Seamless chatbot integration across websites, apps, and messaging platforms.",
      features: [
        "Website widget implementation",
        "Mobile app integration",
        "Social media platform deployment",
        "WhatsApp Business integration",
        "Telegram & Messenger setup",
        "CRM system integration"
      ],
      outcome: "Omnichannel chatbot presence accessible where your customers are"
    },
    {
      step: "03",
      title: "Human Handoff & Escalation Systems",
      description: "Smooth transition from bot to human agents for complex inquiries.",
      features: [
        "Automatic escalation triggers",
        "Live agent transfer protocols",
        "Context preservation during handoff",
        "Agent dashboard integration",
        "Priority queue management",
        "Handoff analytics & reporting"
      ],
      outcome: "Seamless customer experience from bot to human support"
    },
    {
      step: "04",
      title: "Analytics Dashboard & Performance Tracking",
      description: "Comprehensive insights into chatbot performance and customer interactions.",
      features: [
        "Real-time conversation monitoring",
        "Customer satisfaction tracking",
        "Resolution rate analytics",
        "Common query identification",
        "Performance benchmarking",
        "Custom report generation"
      ],
      outcome: "Data-driven insights to optimize chatbot performance continuously"
    },
    {
      step: "05",
      title: "Continuous Learning & Improvement",
      description: "AI-powered learning systems that improve chatbot responses over time.",
      features: [
        "Machine learning model training",
        "User feedback integration",
        "Knowledge base expansion",
        "Response optimization algorithms",
        "Pattern recognition systems",
        "Performance improvement automation"
      ],
      outcome: "Self-improving chatbot that gets smarter with every interaction"
    },
    {
      step: "06",
      title: "Custom Knowledge Base Development",
      description: "Tailored knowledge base creation specific to your business and industry.",
      features: [
        "Industry-specific training data",
        "Product/service knowledge integration",
        "FAQ database development",
        "Policy & procedure documentation",
        "Troubleshooting guides creation",
        "Knowledge base maintenance"
      ],
      outcome: "Well-informed chatbot that provides accurate, relevant information"
    }
  ];

  const resultsMetrics = [
    { value: "80%", label: "Query Resolution", description: "Automated without human help" },
    { value: "24/7", label: "Availability", description: "Round-the-clock support" },
    { value: "4.8", label: "Customer Satisfaction", description: "Based on feedback" },
    { value: "70%", label: "Cost Reduction", description: "vs. traditional support" }
  ];

  const chatbotProcess = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Business needs and customer journey analysis"
    },
    {
      step: "02",
      title: "Strategy & Design",
      description: "Chatbot architecture and conversation design"
    },
    {
      step: "03",
      title: "Development & Training",
      description: "AI model training and integration"
    },
    {
      step: "04",
      title: "Deployment",
      description: "Multi-platform implementation"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous learning and improvement"
    }
  ];

  const chatbotTools = [
    "OpenAI GPT", "Google Dialogflow", "IBM Watson", "Microsoft Azure Bot",
    "Amazon Lex", "Rasa", "Botpress", "Chatfuel",
    "ManyChat", "Landbot", "Drift", "Intercom",
    "Zendesk", "Freshchat", "Crisp", "LivePerson",
    "Zapier", "Make.com", "Google Analytics", "Hotjar"
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
          subject: `AI Chatbot Services Inquiry - Demo Request`,
          html: `
            <h2>New AI Chatbot Services Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Primary Use Case:</strong> ${data.useCase}</p>
            <p><em>Submitted from AI Chatbot Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your chatbot demo request has been received. Our AI team will contact you within 24 hours to schedule a personalized demonstration.');
        
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
                AI-POWERED CHATBOT SOLUTIONS
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Provide 24/7 Customer Support with
              <span className="block font-semibold text-primary mt-2">Intelligent AI Chatbots</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We build intelligent chatbots that understand natural language, provide instant support, and learn continuously to deliver exceptional customer experiences around the clock.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#chatbot-demo"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Request Chatbot Demo
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
                Comprehensive AI Chatbot Framework
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Six-phase methodology for intelligent chatbot development
              </p>
            </div>
            
            <div className="space-y-12">
              {chatbotServices.map((service, index) => (
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
                Our 5-Step Chatbot Development Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Structured approach to AI chatbot implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {chatbotProcess.map((process, index) => (
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
              Industry-leading AI and chatbot platforms we leverage
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900"></div>
            
            {/* Scrolling Container */}
            <div className="animate-scroll flex space-x-12 py-6">
              {[...chatbotTools, ...chatbotTools].map((tool, index) => (
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








      {/* Chatbot Demo Form */}
      <section id="chatbot-demo" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free AI Chatbot Demo
              </h2>
              <p className="text-gray-300">
                Experience the power of intelligent chatbots with a personalized demonstration
              </p>
            </div>
            
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
                    <option value="ecommerce">E-commerce & Retail</option>
                    <option value="saas">SaaS & Technology</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="realestate">Real Estate</option>
                    <option value="hospitality">Hospitality & Travel</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Primary Chatbot Use Case *
                </label>
                <select
                  name="useCase"
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Select primary use case</option>
                  <option value="support">Customer Support</option>
                  <option value="sales">Sales & Lead Generation</option>
                  <option value="onboarding">Customer Onboarding</option>
                  <option value="bookings">Appointments & Bookings</option>
                  <option value="faq">FAQ & Information</option>
                  <option value="multiple">Multiple Use Cases</option>
                </select>
              </div>
              
              <div className="pt-4 text-center">

                {submitMessage && (
              <div className={`mx-auto mb-8 max-w-2xl rounded border-l-4 p-4 ${
                submitStatus === 'success' 
                  ? 'border-green-500 bg-green-900/20 text-green-300' 
                  : 'border-red-500 bg-red-900/20 text-red-300'
              }`}>
                {submitMessage}
              </div>
            )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Request Chatbot Demo'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a personalized chatbot demonstration within 48 hours
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
              Ready to Transform Your Customer Support?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with AI experts who understand how to build intelligent chatbots that deliver exceptional customer experiences, reduce costs, and provide 24/7 support.
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
                href="mailto:opsoraagency@gmail.com?subject=AI%20Chatbot%20Services%20Inquiry&body=Hello%20Opsora%20Team,%0A%0AI%27m%20interested%20in%20your%20AI-Powered%20Chatbot%20services.%20Please%20send%20me%20more%20information.%0A%0AThanks,"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">24/7 Availability</div>
                  <div className="text-gray-500 dark:text-gray-400">Round-the-clock support</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Natural Language</div>
                  <div className="text-gray-500 dark:text-gray-400">Human-like conversations</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Multi-platform</div>
                  <div className="text-gray-500 dark:text-gray-400">Website, apps, messaging</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Continuous Learning</div>
                  <div className="text-gray-500 dark:text-gray-400">Self-improving AI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIChatbotServicesPage;