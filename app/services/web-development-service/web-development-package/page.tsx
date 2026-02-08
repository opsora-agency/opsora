'use client';
import { useState, FormEvent } from 'react';
import Link from "next/link";

const WebsiteDevelopmentPackagePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const websiteServices = [
    {
      step: "01",
      title: "Website Development & Design",
      description: "Custom website development with modern design principles, user experience optimization, and brand-aligned visual identity.",
      features: [
        "Custom UI/UX design",
        "Wireframing & prototyping",
        "Frontend development",
        "Backend development",
        "Content management system",
        "Cross-browser compatibility"
      ],
      outcome: "Professional, user-friendly website that reflects your brand identity"
    },
    {
      step: "02",
      title: "Domain & Hosting Setup",
      description: "Complete domain registration and professional hosting configuration for optimal performance and reliability.",
      features: [
        "Domain name registration",
        "Premium hosting setup",
        "DNS configuration",
        "Email hosting setup",
        "Backup system implementation",
        "Server optimization"
      ],
      outcome: "Reliable online presence with professional email and hosting"
    },
    {
      step: "03",
      title: "SSL Certificate Installation",
      description: "Secure socket layer certificate installation for encrypted data transfer and improved search engine ranking.",
      features: [
        "SSL certificate procurement",
        "HTTPS configuration",
        "Security protocol setup",
        "Mixed content resolution",
        "SSL renewal management",
        "Security seal implementation"
      ],
      outcome: "Secure website with trusted SSL certification"
    },
    {
      step: "04",
      title: "SEO Optimization",
      description: "Search engine optimization implementation to improve visibility, organic traffic, and search rankings.",
      features: [
        "On-page SEO optimization",
        "Meta tags optimization",
        "Schema markup implementation",
        "XML sitemap generation",
        "Robots.txt configuration",
        "SEO-friendly URL structure"
      ],
      outcome: "Improved search engine visibility and organic traffic growth"
    },
    {
      step: "05",
      title: "Website Updates & Maintenance",
      description: "Ongoing website maintenance, updates, and support to ensure optimal performance and security.",
      features: [
        "Regular software updates",
        "Security monitoring",
        "Performance optimization",
        "Content updates",
        "Bug fixes & troubleshooting",
        "Monthly maintenance reports"
      ],
      outcome: "Consistently updated and well-maintained website"
    },
    {
      step: "06",
      title: "Responsive Mobile Design",
      description: "Mobile-optimized website design that provides excellent user experience across all devices and screen sizes.",
      features: [
        "Mobile-first design approach",
        "Touch-friendly navigation",
        "Mobile performance optimization",
        "Responsive image handling",
        "Mobile testing & validation",
        "Progressive web app features"
      ],
      outcome: "Seamless user experience across all devices"
    },
    {
      step: "07",
      title: "Performance Optimization",
      description: "Advanced performance tuning for fast loading speeds, improved user experience, and better conversion rates.",
      features: [
        "Page speed optimization",
        "Image optimization",
        "Caching implementation",
        "Code minification",
        "Lazy loading setup",
        "CDN configuration"
      ],
      outcome: "Lightning-fast website with excellent performance metrics"
    },
    {
      step: "08",
      title: "Security Implementation",
      description: "Comprehensive security measures to protect your website from threats, vulnerabilities, and attacks.",
      features: [
        "Firewall implementation",
        "Malware scanning",
        "Security hardening",
        "Regular security audits",
        "DDoS protection",
        "Data backup systems"
      ],
      outcome: "Secure website protected against threats and vulnerabilities"
    }
  ];

  const resultsMetrics = [
    { value: "99.9%", label: "Uptime", description: "Website reliability guarantee" },
    { value: "<2s", label: "Load Time", description: "Average page load speed" },
    { value: "95+", label: "Performance Score", description: "Google PageSpeed Insights" },
    { value: "24/7", label: "Support", description: "Ongoing maintenance & support" }
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

  const websiteTools = [
    "React", "Next.js", "Vue.js", "Angular",
    "Node.js", "Express", "Python", "Django",
    "WordPress", "Shopify", "Webflow", "Figma",
    "Adobe XD", "Photoshop", "Illustrator", "Cloudflare",
    "AWS", "Google Cloud", "Vercel", "Netlify",
    "Git", "GitHub", "Docker", "MySQL"
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
          subject: `Complete Website Package Inquiry - Consultation Request`,
          html: `
            <h2>New Complete Website Development Package Inquiry</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Website Type:</strong> ${data.websiteType}</p>
            <p><strong>Company Size:</strong> ${data.companySize}</p>
            <p><em>Submitted from Complete Website Development Package page</em></p>
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
      <section className="relative overflow-hidden pt-32 pb-20 md:pt=40 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                COMPLETE WEBSITE DEVELOPMENT PACKAGE
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-light tracking-tight text-gray-900 dark:text-white md:text-6xl">
              End-to-End Web Solution for Your Business
              <span className="block font-semibold text-primary mt-2">Everything You Need for a Successful Online Presence</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Get a comprehensive website development package including design, development, hosting, SEO, security, and ongoing maintenance - all in one complete solution.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#website-consultation"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary/90"
              >
                Get Free Consultation
              </a>
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-8 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Book Package Now
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
              Package Performance Guarantee
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
                Complete Package Inclusions
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Eight essential components for a successful website
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
                Our 5-Step Website Development Process
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

      {/* Technology Stack - Scrolling Marquee */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white md:text-4xl">
              Technology Stack
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Modern technologies and tools we use for website development
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900"></div>
            <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900"></div>
            
            {/* Scrolling Container */}
            <div className="animate-scroll flex space-x-12 py-6">
              {[...websiteTools, ...websiteTools].map((tool, index) => (
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

      {/* Website Consultation Form */}
      <section id="website-consultation" className="py-20 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">
                Free Website Package Consultation
              </h2>
              <p className="text-gray-300">
                Discover how our complete website package can establish your successful online presence
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
                    <option value="startup">Startup (1-10 employees)</option>
                    <option value="small">Small Business (11-50)</option>
                    <option value="medium">Medium Business (51-200)</option>
                    <option value="large">Large Business (201+)</option>
                    <option value="enterprise">Enterprise (500+)</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? 'Processing...' : 'Get Free Consultation'}
                </button>
                <p className="mt-3 text-sm text-gray-400">
                  You'll receive a personalized website package proposal within 48 hours
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
              Ready to Launch Your Complete Website?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-gray-600 dark:text-gray-300">
              Get everything you need for a successful online presence in one comprehensive package - design, development, hosting, SEO, security, and ongoing maintenance.
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
                Book Package Now
              </Link>
              <a
                href="mailto:opsoraagency@gmail.com?subject=Complete%20Website%20Package%20Inquiry&body=Hello%20Opsora%20Team,%0A%0AI%27m%20interested%20in%20your%20Complete%20Website%20Development%20Package.%20Please%20send%20me%20more%20information.%0A%0AThanks,"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-10 py-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Email Us
              </a>
            </div>
            
            <div className="mt-12 border-t border-gray-200 pt-12 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 font-medium text-gray-900 dark:text-white">Website Development</div>
                  <div className="text-gray-500 dark:text-gray-400">Custom design & development</div>
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

export default WebsiteDevelopmentPackagePage;