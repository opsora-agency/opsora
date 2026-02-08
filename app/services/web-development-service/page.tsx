'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const WebsiteDevelopmentServicesPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const websiteServices = [
    {
      step: "01",
      title: "Website Development",
      description: "Custom website development using modern technologies like Next.js, React, and Tailwind CSS. We build fast, responsive, and scalable websites tailored to your business needs.",
      features: [
        "Custom Next.js/React Development",
        "Mobile-First Responsive Design",
        "Performance Optimization",
        "Cross-Browser Compatibility"
      ],
      outcome: "High-performance website optimized for speed and user experience"
    },
    {
      step: "02",
      title: "Website Design",
      description: "Professional UI/UX design that creates engaging user experiences. We design visually stunning interfaces that reflect your brand identity and drive conversions.",
      features: [
        "UI/UX Design & Prototyping",
        "Brand Identity Integration",
        "Custom Graphics & Illustrations",
        "User Journey Mapping"
      ],
      outcome: "Visually stunning design that enhances user engagement and conversions"
    },
    {
      step: "03",
      title: "Domain & Hosting",
      description: "Complete hosting solution with domain registration, premium hosting, email setup, and daily backups. We ensure maximum uptime and reliability for your website.",
      features: [
        "Domain Registration & Management",
        "Premium Web Hosting (99.9% Uptime)",
        "Email Hosting Setup",
        "Daily Backups & Security"
      ],
      outcome: "Reliable online presence with professional email and maximum uptime"
    },
    {
      step: "04",
      title: "SSL Certificate",
      description: "Implementation and management of SSL certificates to ensure your website is secure, builds trust with visitors, and improves search engine rankings.",
      features: [
        "HTTPS Implementation",
        "Wildcard SSL Certificates",
        "Certificate Auto-Renewal",
        "Security Headers Configuration"
      ],
      outcome: "Secure website with SSL certification and improved search rankings"
    },
    {
      step: "05",
      title: "SEO Optimization",
      description: "Websites built with SEO best practices from the ground up, ensuring maximum visibility in search engines and driving organic traffic to your business.",
      features: [
        "On-Page SEO Implementation",
        "Technical SEO Audit & Fixes",
        "Structured Data & Schema Markup",
        "Core Web Vitals Optimization"
      ],
      outcome: "Improved search engine visibility and organic traffic growth"
    },
    {
      step: "06",
      title: "Website Updates",
      description: "Ongoing maintenance and updates to keep your website secure, up-to-date, and performing at its best long after launch.",
      features: [
        "Content Updates & Management",
        "Security Patches & Updates",
        "Performance Monitoring",
        "Regular Backups & Recovery"
      ],
      outcome: "Consistently updated and well-maintained website"
    }
  ];

  const resultsMetrics = [
    { value: "99.9%", label: "Uptime", description: "Website reliability guarantee" },
    { value: "<2s", label: "Load Time", description: "Average page load speed" },
    { value: "95+", label: "Performance Score", description: "Google PageSpeed Insights" },
    { value: "24/7", label: "Support", description: "Ongoing maintenance & support" }
  ];

  const whyChooseUs = [
    {
      title: "High-Performance Code",
      description: "Optimized for speed, SEO, and user experience. We write clean, efficient code that ensures fast loading times and excellent performance.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Complete Solution",
      description: "Design, development, hosting, SSL, and maintenance. We handle everything from initial concept to ongoing support.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Enterprise Security",
      description: "SSL certificates, security headers, and protection. We implement enterprise-level security measures to protect your website.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Ongoing Support",
      description: "Regular updates, maintenance, and performance monitoring. We ensure your website remains optimized and secure long-term.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const websiteProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Requirements gathering and project planning"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Wireframing and visual design creation"
    },
    {
      step: "03",
      title: "Development",
      description: "Coding and functionality implementation"
    },
    {
      step: "04",
      title: "Testing & Quality",
      description: "Comprehensive testing and bug fixing"
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Deployment and ongoing maintenance"
    }
  ];

  // All tools from your details
  const allWebTools = [
    // Development Frameworks
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    // Design & Prototyping
    "Figma", "Adobe XD", "Sketch", "Adobe Creative Suite",
    // Hosting & Deployment
    "Vercel", "AWS", "Google Cloud", "Netlify",
    // SEO & Analytics
    "Google Analytics 4", "Google Search Console", "SEMrush", "Ahrefs"
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
          subject: `Website Development Services Inquiry - Consultation Request`,
          html: `
            <h2>New Website Development Services Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Website Type:</strong> ${data.websiteType}</p>
            <p><strong>Company Size:</strong> ${data.companySize}</p>
            <p><em>Submitted from Website Development Services page</em></p>
          `,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you. Your website development consultation request has been received. Our web development team will contact you within 24 hours with preliminary insights.');
        
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
                COMPLETE WEBSITE SOLUTIONS
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Build High-Performance Websites That Drive Growth
              <span className="block font-semibold text-primary mt-2">with Our Complete Web Development Package</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              At Opsora Agency, we deliver complete website solutions from initial concept to ongoing maintenance. We build high-performance, responsive websites that not only look stunning but also drive business growth and deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#website-consultation"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Get Free Website Consultation
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
              Performance Guarantee
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
                Why Choose Our Web Development Services?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We combine cutting-edge technology with proven methodologies to deliver exceptional websites
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
                Our Complete Website Package Includes
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Everything you need for a successful online presence
              </p>
            </div>
            
            <div className="space-y-12">
              {websiteServices.map((service, index) => (
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
                      Package Benefit:
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
                Our 5-Step Web Development Process
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Structured approach to website development success
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
              {websiteProcess.map((process, index) => (
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
              We leverage industry-leading tools and technologies to build exceptional websites
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-800/50 dark:to-transparent"></div>
            
            {/* Scrolling Container */}
            <div className="animate-scroll flex space-x-8 py-6">
              {[...allWebTools, ...allWebTools].map((tool, index) => (
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
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Development Frameworks</h4>
              <div className="space-y-2">
                {allWebTools.slice(0, 4).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Design & Prototyping</h4>
              <div className="space-y-2">
                {allWebTools.slice(4, 8).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Hosting & Deployment</h4>
              <div className="space-y-2">
                {allWebTools.slice(8, 12).map((tool, index) => (
                  <div key={index} className="text-gray-600 dark:text-gray-300">{tool}</div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">SEO & Analytics</h4>
              <div className="space-y-2">
                {allWebTools.slice(12, 16).map((tool, index) => (
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
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36c0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            
            <blockquote className="mb-10 text-2xl font-light text-gray-900 dark:text-white md:text-3xl">
              "We don't just build websites—we create digital assets that grow with your business. Our comprehensive approach ensures your online presence is not just established but continuously optimized for success."
            </blockquote>
            
            <div className="text-gray-600 dark:text-gray-300">
              <p className="text-lg font-medium">— Opsora Agency Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Consultation Form */}
      <section id="website-consultation" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free Website Development Consultation
              </h2>
              <p className="text-gray-300">
                Discover how our complete website solutions can transform your online presence
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
                    Website Type Needed
                  </label>
                  <select
                    name="websiteType"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select website type</option>
                    <option value="business">Business Website</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="portfolio">Portfolio Website</option>
                    <option value="blog">Blog or Content Site</option>
                    <option value="saas">SaaS Application</option>
                    <option value="landing">Landing Page</option>
                    <option value="other">Other</option>
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
                  Current Website Status
                </label>
                <select className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">Select current status</option>
                  <option value="none">No Website Currently</option>
                  <option value="outdated">Have Website but Needs Update</option>
                  <option value="redesign">Need Complete Redesign</option>
                  <option value="new-feature">Need New Website with Advanced Features</option>
                </select>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Project Timeline & Requirements
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Briefly describe your timeline, specific requirements, and any features you need..."
                />
              </div>
              
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Get Free Website Consultation'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a personalized website development proposal within 48 hours
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
              Ready to Launch Your High-Performance Website?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Partner with web development experts who understand how to build stunning, high-performance websites that drive business growth and deliver exceptional user experiences.
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
                href="mailto:opsoraagency@gmail.com?subject=Website%20Development%20Services%20Inquiry&body=Hello%20Opsora%20Team,%0A%0AI%27m%20interested%20in%20your%20Website%20Development%20services.%20Please%20send%20me%20more%20information.%0A%0AThanks,"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Website Development</div>
                  <div className="text-gray-500 dark:text-gray-400">Custom Next.js/React development</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Domain & Hosting</div>
                  <div className="text-gray-500 dark:text-gray-400">Complete setup & configuration</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">SEO Optimization</div>
                  <div className="text-gray-500 dark:text-gray-400">Search engine visibility</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">24/7 Support</div>
                  <div className="text-gray-500 dark:text-gray-400">Ongoing maintenance & updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopmentServicesPage;