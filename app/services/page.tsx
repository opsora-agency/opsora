import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Opsora Agency',
  description: 'Professional digital marketing, automation AI agents, and web development services to grow your business.',
};

const ServicesPage = () => {
  // Main service categories with read more links
  const mainServices = [
    {
      title: 'Digital Marketing Services',
      description: 'Boost your online presence, drive targeted traffic, and convert leads with our data-driven marketing strategies.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      count: 6,
      readMoreLink: '/services/digital-marketing-services',
    },
    {
      title: 'Automation & AI Services',
      description: 'Transform your operations with intelligent AI agents and automation that work 24/7 to grow your business.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      count: 6,
      readMoreLink: '/services/automation-services',
    },
    {
      title: 'Website Development Service',
      description: 'Complete web solutions package: Design, development, hosting, security, SEO, and maintenance included.',
      icon: (
        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      count: 1,
      readMoreLink: '/services/web-development-service',
    },
  ];

  // All services organized by category with individual read more links
  const services = [
    {
      category: 'Digital Marketing Services',
      items: [
        {
          title: 'Search Engine Optimization (SEO)',
          description: 'Improve your website ranking on Google and drive organic traffic with comprehensive SEO strategies.',
          features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO Audit', 'Backlink Building', 'Local SEO'],
          serviceNumber: 1,
          readMoreLink: '/services/digital-marketing-services/seo',
        },
        {
          title: 'Social Media Marketing',
          description: 'Build brand awareness and engage with your audience across all major social media platforms.',
          features: ['Content Strategy', 'Community Management', 'Paid Social Ads', 'Analytics & Reporting', 'Influencer Collaboration'],
          serviceNumber: 2,
          readMoreLink: '/services/digital-marketing-services/SocialMediaMarketing',
        },
        {
          title: 'Google Ads (PPC Campaigns)',
          description: 'Run targeted pay-per-click campaigns on Google to get immediate traffic and conversions.',
          features: ['Campaign Setup', 'Keyword Bidding', 'Ad Copy Creation', 'Conversion Tracking', 'ROI Optimization'],
          serviceNumber: 3,
          readMoreLink: '/services/digital-marketing-services/GoogleAds',
        },
        {
          title: 'Meta Ads (PPC Campaigns)',
          description: 'Reach your target audience on Facebook and Instagram with precision-targeted advertising.',
          features: ['Audience Targeting', 'Ad Creative Design', 'Campaign Management', 'A/B Testing', 'Performance Analysis'],
          serviceNumber: 4,
          readMoreLink: '/services/digital-marketing-services/MetaAds',
        },
        {
          title: 'Content Marketing',
          description: 'Create valuable, relevant content that attracts and retains your target audience.',
          features: ['Blog Writing', 'Video Content', 'Infographics', 'Content Distribution', 'SEO-Optimized Content'],
          serviceNumber: 5,
          readMoreLink: '/services/digital-marketing-services/ContentMarketing',
        },
        {
          title: 'Email Marketing',
          description: 'Nurture leads and retain customers through personalized, automated email campaigns.',
          features: ['List Building', 'Email Templates', 'Automation Workflows', 'A/B Testing', 'Performance Analytics'],
          serviceNumber: 6,
          readMoreLink: '/services/digital-marketing-services/email-marketing',
        },
      ],
    },
    {
      category: 'Automation & AI Services',
      items: [
        {
          title: 'AI Workflow Automation',
          description: 'Automate repetitive business processes and streamline operations with intelligent workflows.',
          features: ['Process Mapping', 'Tool Integration', 'Custom Automations', 'Monitoring & Alerts', 'Performance Analytics'],
          serviceNumber: 1,
          readMoreLink: '/services/automation-services/ai-workflow-automation',
        },
        {
          title: 'AI-Powered Chatbots',
          description: 'Provide 24/7 customer support with intelligent chatbots that understand natural language.',
          features: ['Natural Language Processing', 'Multi-platform Support', 'Human Handoff', 'Analytics Dashboard', 'Continuous Learning'],
          serviceNumber: 2,
          readMoreLink: '/services/automation-services/ai-chatbots',
        },
        {
          title: 'Sales AI Agents',
          description: 'Automate lead qualification, follow-ups, and appointment setting with AI sales agents.',
          features: ['Lead Scoring', 'Auto-Responses', 'CRM Integration', 'Performance Analytics', 'Personalized Outreach'],
          serviceNumber: 3,
          readMoreLink: '/services/automation-services/sales-ai-agents',
        },
        {
          title: 'Finance AI Agents',
          description: 'Automate financial processes, expense tracking, and reporting with AI finance agents.',
          features: ['Expense Management', 'Invoice Processing', 'Financial Reporting', 'Budget Tracking', 'Compliance Checks'],
          serviceNumber: 4,
          readMoreLink: '/services/automation-services/finance-ai-agents',
        },
        {
          title: 'Support AI Agent',
          description: 'Handle customer queries, ticket management, and support routing with AI agents.',
          features: ['Ticket Triage', 'Knowledge Base', 'Escalation Routing', 'Customer Satisfaction', '24/7 Availability'],
          serviceNumber: 5,
          readMoreLink: '/services/automation-services/support-ai-agent',
        },
        {
          title: 'Custom AI Agent, Automation & Chatbots',
          description: 'Build custom AI solutions tailored to your specific business needs and workflows.',
          features: ['Requirement Analysis', 'Custom Training', 'API Integration', 'Ongoing Maintenance', 'Scalable Solutions'],
          serviceNumber: 6,
          readMoreLink: '/services/automation-services/custom-ai-solutions',
        },
      ],
    },
    {
      category: 'Website Development Service',
      items: [
        {
          title: 'Complete Website Development Package',
          description: 'End-to-end web solution including everything you need for a successful online presence.',
          features: [
            'Website Development & Design',
            'Domain & Hosting Setup',
            'SSL Certificate Installation',
            'SEO Optimization',
            'Website Updates & Maintenance',
            'Responsive Mobile Design',
            'Performance Optimization',
            'Security Implementation'
          ],
          price: 'Starting at $1,000',
          serviceNumber: 1,
          isPackage: true,
          readMoreLink: '/services/web-development-service/web-development-package',
        },
      ],
    },
  ];

  return (
    <>
      <section className="pb-16 pt-28 md:pt-36">
        <div className="container px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Minimal */}
          <div className="mb-20 text-center">
            <h1 className="mb-4 text-4xl font-light tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Professional Services for
              <span className="block font-medium text-primary mt-2">Digital Success</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 dark:text-gray-400">
              13 specialized services across 3 main categories to help your business grow online.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/book-service/Book-Demo"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Book Demo Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-transparent px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>

          {/* Stats Section - Clean & Minimal 
          <div className="mb-20">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <div className="text-3xl font-bold text-primary md:text-4xl">13</div>
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Total Services</div>
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Across all categories</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <div className="text-3xl font-bold text-primary md:text-4xl">3</div>
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Main Categories</div>
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Specialized service groups</div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                <div className="text-3xl font-bold text-primary md:text-4xl">1</div>
                <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">Complete Package</div>
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">Everything included</div>
              </div>
            </div>
          </div>*/}

          {/* Main Service Categories - Minimal Design */}
          <div id="services" className="mb-20 scroll-mt-20">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-light text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                Our Core Service Categories
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Explore our comprehensive service offerings
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="group rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600"
                >
                  <div className="mb-5 flex items-center justify-center">
                    <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="mb-3 text-center text-xl font-medium text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-center text-sm text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <div className="inline-flex flex-col items-center gap-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                        {service.count} Service{service.count !== 1 ? 's' : ''}
                      </span>
                      <Link
                        href={service.readMoreLink}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80"
                      >
                        Explore Services
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Services Section - Improved Organization */}
          <div className="mb-16">
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-light text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                All Our Services
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Detailed breakdown of each service category
              </p>
            </div>
            
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                {/* Category Header - Minimal */}
                <div className="mb-8 border-b border-gray-200 pb-4 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 dark:text-white sm:text-2xl">
                        {category.category}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {category.category === 'Website Development Service' 
                          ? 'Complete package with everything included'
                          : `${category.items.length} specialized services`
                        }
                      </p>
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                      {category.items.length} Service{category.items.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* Services Grid - Clean Layout */}
                <div className={`grid gap-6 ${category.items[0]?.isPackage ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                  {category.items.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className={`group rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 ${
                        service.isPackage ? 'md:p-6 border-primary/20' : ''
                      }`}
                    >
                      {/* Service Header */}
                      <div className="mb-5">
                        <div className="mb-4 flex items-start gap-4">
                          <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                            service.isPackage 
                              ? 'bg-primary text-white' 
                              : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                          }`}>
                            <span className={`font-medium ${
                              service.isPackage ? 'text-lg' : 'text-lg'
                            }`}>
                              {service.serviceNumber}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                              {service.title}
                            </h4>
                            {service.isPackage && (
                              <p className="mt-1 text-sm font-medium text-primary">
                                Starting from 1,000₹
                              </p>
                            )}
                          </div>
                        </div>
                          
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {service.description}
                        </p>
                      </div>

                      {/* Features List - Minimal */}
                      <div className="mb-6">
                        <h5 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                          {service.isPackage ? 'Package Includes:' : 'Features Included:'}
                        </h5>
                        <ul className={`space-y-2 ${
                          service.isPackage 
                            ? 'columns-1 md:columns-2 gap-4' 
                            : ''
                        }`}>
                          {service.features.map((feature, featureIndex) => (
                            <li 
                              key={featureIndex} 
                              className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 sm:text-sm"
                            >
                              <svg className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons - Improved Design */}
                      <div className="mt-auto border-t border-gray-100 pt-5 dark:border-gray-700">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          {service.isPackage && (
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              <span className="font-medium">One-time setup</span>
                              <span className="mx-1">•</span>
                              <span>Optional monthly maintenance</span>
                            </div>
                          )}
                          
                          <div className="flex gap-2">
                            <Link
                              href={service.readMoreLink}
                              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-primary hover:bg-gray-50 hover:text-primary dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-primary dark:hover:bg-gray-700"
                            >
                              <span>View Details</span>
                              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </Link>
                            
                            <Link
                              href="/book-service"
                              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-primary/90"
                            >
                              <span>Book Now</span>
                              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Final CTA - Minimal Design */}
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-8 text-center dark:bg-primary/10 md:p-10">
            <h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-white sm:text-2xl">
              Ready to Transform Your Business?
            </h3>
            <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
              Choose from our 13 specialized services or get a custom package tailored to your specific needs.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/book-service"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Get Started Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;