import { getImagePath } from "@/lib/utils";
import Image from "next/image";

const AboutSectionTwo = () => {
  const features = [
    {
      icon: (
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Partnership Approach",
      description: "We work as an extension of your team, not just a service provider. Collaborative strategy sessions ensure alignment with your vision.",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      count: "01"
    },
    {
      icon: (
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      ),
      title: "Data-Driven Growth",
      description: "Real-time analytics and AI-powered insights transform raw data into actionable growth strategies with measurable ROI.",
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      count: "02"
    },
    {
      icon: (
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "24/7 AI-Powered Support",
      description: "Instant AI assistance with seamless human escalation. Critical issues receive immediate attention with guaranteed response times.",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      count: "03"
    }
  ];

  return (
    <section className="py-12 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm">
            Our Approach
          </span>
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
            How We Deliver
            <span className="block text-primary sm:inline"> Exceptional Results</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-body-color sm:text-lg">
            A unique combination of technology, expertise, and partnership that sets us apart.
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap items-center">
          {/* LEFT COLUMN - IMAGE */}
          <div className="mb-10 w-full px-4 lg:mb-0 lg:w-1/2">
            <div className="relative">
              <div
                className="wow fadeInUp relative mx-auto aspect-[4/3] max-w-full overflow-hidden rounded-xl sm:aspect-[25/24] sm:rounded-3xl lg:mr-auto"
                data-wow-delay=".15s"
              >
                <Image
                  src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop&auto=format"
                  alt="Our collaborative process"
                  fill
                  className="object-cover drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                {/*{getImagePath("/images/about/about-image-2-dark.svg")}*/}
                <Image
                  src= "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop&auto=format"
                  alt="Our collaborative process"
                  fill
                  className="hidden object-cover drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>

              {/* Floating Elements - Mobile Adjusted */}
              <div className="absolute -right-2 top-4 rounded-xl bg-white p-3 shadow-xl dark:bg-gray-800 sm:-right-6 sm:top-1/4 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black dark:text-white sm:text-base">AI-Assisted</div>
                    <div className="text-xs text-body-color">24/7 Operations</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-2 bottom-8 rounded-xl bg-white p-3 shadow-xl dark:bg-gray-800 sm:-left-4 sm:bottom-1/4 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-black dark:text-white sm:text-base">Fast Results</div>
                    <div className="text-xs text-body-color">Weeks, Not Months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - FEATURES */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="space-y-6 sm:space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group wow fadeInUp"
                  data-wow-delay={`${0.1 + index * 0.1}s`}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number Badge */}
                    <div className="relative flex-shrink-0">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl ${feature.color}`}>
                        {feature.icon}
                      </div>
                      <div className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white sm:-right-2 sm:-top-2 sm:h-8 sm:w-8">
                        {feature.count}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-bold text-black dark:text-white sm:mb-3 sm:text-xl">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-body-color sm:text-base">
                        {feature.description}
                      </p>
                      
                      {/* Hover Line Effect */}
                      <div className="mt-3 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full sm:mt-4"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="mt-8 rounded-xl bg-gradient-to-r from-primary to-blue-600 p-4 text-white sm:mt-12 sm:rounded-2xl sm:p-6">
              <div className="grid grid-cols-3 gap-3 text-center sm:gap-4">
                <div>
                  <div className="text-xl font-bold sm:text-2xl">99%</div>
                  <div className="text-xs opacity-90 sm:text-sm">Client Retention</div>
                </div>
                <div>
                  <div className="text-xl font-bold sm:text-2xl">4.9/5</div>
                  <div className="text-xs opacity-90 sm:text-sm">Satisfaction</div>
                </div>
                <div>
                  <div className="text-xl font-bold sm:text-2xl">24h</div>
                  <div className="text-xs opacity-90 sm:text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center sm:mt-20">
          <div className="inline-flex flex-col items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:gap-6 sm:rounded-2xl sm:p-8 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-lg font-bold text-black dark:text-white sm:text-xl">
                Ready to experience our approach?
              </h3>
              <p className="text-sm text-body-color sm:text-base">
                See how our unique methodology can transform your business.
              </p>
            </div>
            <a
              href="/contact"
              className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 sm:px-8 sm:py-3 sm:text-base"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;