'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const SocialMediaServicesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const socialServices = [
    {
      step: "01",
      title: "Content Strategy Development",
      description: "Strategic content planning across all social platforms to build brand identity and engage target audiences.",
      features: [
        "Platform-specific content strategy",
        "Brand voice & tone development",
        "Content calendar planning",
        "Visual identity guidelines",
        "Content pillar development",
        "Competitive content analysis"
      ],
      outcome: "Cohesive brand presence and consistent audience engagement"
    },
    {
      step: "02",
      title: "Community Management",
      description: "Active engagement and relationship building with your audience across social platforms.",
      features: [
        "Daily community engagement",
        "Comment moderation & response",
        "Audience sentiment analysis",
        "Crisis management planning",
        "User-generated content campaigns",
        "Brand advocacy programs"
      ],
      outcome: "Loyal brand community and improved customer relationships"
    },
    {
      step: "03",
      title: "Paid Social Advertising",
      description: "Data-driven paid campaigns to reach targeted audiences and drive conversions.",
      features: [
        "Audience targeting strategy",
        "Campaign optimization",
        "Ad creative development",
        "Budget management",
        "A/B testing implementation",
        "Retargeting campaigns"
      ],
      outcome: "Increased reach, higher conversions, and better ROI on ad spend"
    },
    {
      step: "04",
      title: "Analytics & Performance Reporting",
      description: "Comprehensive tracking and analysis of social media performance metrics.",
      features: [
        "KPI tracking & monitoring",
        "Performance dashboard setup",
        "Competitor benchmarking",
        "ROI analysis",
        "Monthly performance reports",
        "Strategy optimization insights"
      ],
      outcome: "Data-driven decisions and continuous campaign improvement"
    },
    {
      step: "05",
      title: "Influencer Collaboration",
      description: "Strategic partnerships with influencers to expand reach and build credibility.",
      features: [
        "Influencer identification & vetting",
        "Partnership negotiation",
        "Campaign management",
        "Content approval process",
        "Performance tracking",
        "Relationship management"
      ],
      outcome: "Extended reach, increased credibility, and authentic brand advocacy"
    },
    {
      step: "06",
      title: "Platform Management",
      description: "Complete management of all major social media platforms and channels.",
      features: [
        "Platform optimization",
        "Profile management",
        "Feature utilization",
        "Algorithm adaptation",
        "Cross-platform integration",
        "Emerging platform testing"
      ],
      outcome: "Maximum platform leverage and optimal channel performance"
    }
  ];

  const resultsMetrics = [
    { value: "300%", label: "Engagement Growth", description: "Average across clients" },
    { value: "4.9", label: "Client Satisfaction", description: "Based on reviews" },
    { value: "50%", label: "Cost Reduction", description: "vs. in-house management" },
    { value: "85%", label: "Retention Rate", description: "Long-term partnerships" }
  ];

  const socialProcess = [
    {
      step: "01",
      title: "Audit & Research",
      description: "Comprehensive analysis of current social presence"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom social media roadmap creation"
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Platform-optimized content production"
    },
    {
      step: "04",
      title: "Execution & Management",
      description: "Daily posting and community engagement"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Performance analysis and strategy refinement"
    }
  ];

  const socialTools = [
    "Meta Business Suite", "Hootsuite", "Buffer", "Sprout Social",
    "Later", "Canva", "Adobe Creative Cloud", "Google Analytics",
    "Brandwatch", "Mention", "BuzzSumo", "SocialBee",
    "Agorapulse", "Sendible", "Tailwind", "Planoly",
    "Crowdfire", "Social Pilot", "Zoho Social", "Iconosquare"
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
          subject: `Social Media Marketing Inquiry - Strategy Session Request`,
          html: `
            <h2>New Social Media Marketing Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Monthly Budget:</strong> ${data.budget}</p>
            <p><strong>Primary Goal:</strong> ${data.goal}</p>
            <p><em>Submitted from Social Media Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your strategy session request has been received. Our social media team will contact you within 24 hours.');
        
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
                PROFESSIONAL SOCIAL MEDIA MARKETING
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Build Brand Awareness & Engage
              <span className="block font-semibold text-primary mt-2">Your Audience Effectively</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We create compelling social media strategies that build meaningful connections and drive business growth across all major platforms.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#strategy-session"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Book Strategy Session
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
                Comprehensive Social Media Framework
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Six-phase methodology for sustainable social media growth
              </p>
            </div>
            
            <div className="space-y-12">
              {socialServices.map((service, index) => (
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
                Structured approach to social media success
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {socialProcess.map((process, index) => (
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
              {[...socialTools, ...socialTools].map((tool, index) => (
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

      {/* Strategy Session Form */}
      <section id="strategy-session" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free Social Media Strategy Session
              </h2>
              <p className="text-gray-300">
                Receive a customized social media plan and growth strategy for your business
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
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Primary Social Media Goal
                  </label>
                  <select
                    name="goal"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select primary goal</option>
                    <option value="awareness">Brand Awareness</option>
                    <option value="engagement">Audience Engagement</option>
                    <option value="leads">Lead Generation</option>
                    <option value="sales">Direct Sales</option>
                    <option value="community">Community Building</option>
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
                  {isSubmitting ? 'Processing...' : 'Book Strategy Session'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a customized social media strategy within 48 hours
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
              Ready to Amplify Your Social Presence?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with experts who understand how to build meaningful connections and drive real business results through social media.
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
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Daily Management</div>
                  <div className="text-gray-500 dark:text-gray-400">Consistent platform presence</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Content Creation</div>
                  <div className="text-gray-500 dark:text-gray-400">Professional design & copy</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Performance Reports</div>
                  <div className="text-gray-500 dark:text-gray-400">Monthly analytics & insights</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Strategy Updates</div>
                  <div className="text-gray-500 dark:text-gray-400">Continuous optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaServicesPage;