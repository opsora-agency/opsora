import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const stats = [
  { value: "13+", label: "Services" },
  { value: "24/7", label: "Support" },
  { value: "100%", label: "Client Focus" },
  { value: "AI", label: "Powered" },
];

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-12 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-12 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-8">
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm sm:px-4 sm:py-2">
                  Why Choose Opsora
                </span>
                <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  We Don't Just Deliver Services,
                  <span className="block text-primary sm:inline"> We Deliver Results</span>
                </h2>
              </div>

              <div className="mb-10">
                <p className="mb-6 text-base leading-relaxed text-body-color sm:text-lg">
                  In today's digital landscape, businesses need more than just service providers—they need strategic partners who understand both technology and business growth. At Opsora Agency, we bridge this gap with intelligent solutions that work for you 24/7.
                </p>
                
                <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800 sm:p-6">
                  <p className="mb-3 text-base font-semibold text-black dark:text-white sm:text-lg">
                    Our Difference: Intelligent Automation Meets Human Expertise
                  </p>
                  <p className="text-sm text-body-color sm:text-base">
                    While AI and automation handle the heavy lifting, our expert team ensures every strategy aligns with your business goals. We combine cutting-edge technology with deep industry knowledge to create solutions that are both innovative and practical.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mb-10 lg:mb-12">
                <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Our Impact
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 bg-white p-3 text-center dark:border-gray-700 dark:bg-gray-800 sm:p-4"
                    >
                      <div className="text-xl font-bold text-primary sm:text-2xl md:text-3xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs font-medium text-body-color sm:mt-2 sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a
                  href="/book-service"
                  className="rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90 sm:px-6 sm:py-3 sm:text-base"
                >
                  Start Your Project
                </a>
                <a
                  href="/contact"
                  className="rounded-lg border border-primary bg-transparent px-4 py-2.5 text-center text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white sm:px-6 sm:py-3 sm:text-base"
                >
                  Schedule Consultation
                </a>
              </div>*/}
            </div>

            {/* Right Column - Image with Overlay Content */}
            <div className="mt-12 w-full px-4 lg:mt-0 lg:w-1/2">
              <div className="relative">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[4/3] max-w-full overflow-hidden rounded-xl sm:aspect-[25/24] sm:rounded-2xl lg:mr-0"
                  data-wow-delay=".2s"
                >

                  
                  <Image
  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format"
  alt="Opsora Agency Business Growth Dashboard"
  fill
  className="mx-auto max-w-full object-cover drop-shadow-three lg:mr-0"
/>
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&auto=format"
                    alt="Opsora Agency Team"
                    fill
                    className="mx-auto hidden max-w-full object-cover drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                  
                </div>




                {/* Floating Info Card - Mobile Responsive */}
                <div className="absolute -bottom-4 left-4 right-4 w-auto rounded-xl bg-white p-4 shadow-xl dark:bg-gray-800 sm:p-6 md:right-4 md:w-4/5 lg:-right-6 lg:bottom-1/4 lg:left-auto lg:w-4/5">
                  <div className="mb-3 flex items-center gap-3 sm:mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 sm:h-12 sm:w-12">
                      <svg className="h-5 w-5 text-primary sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-black dark:text-white sm:text-base">
                        Fast Results
                      </h4>
                      <p className="text-xs text-body-color sm:text-sm">
                        See impact in weeks, not months
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-body-color sm:text-sm">
                    Our streamlined processes and AI-powered tools ensure rapid implementation and measurable results from day one.
                  </p>
                </div>

                {/* Experience Badge - Mobile Responsive */}
                <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-white shadow-lg sm:px-4 sm:py-2 lg:left-0 lg:top-8">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-semibold sm:text-sm">Trusted Partner</span>
                  </div>
                </div>
              </div>

              {/* Feature Points - Stack on Mobile */}
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30 sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-black dark:text-white sm:mb-2 sm:text-base">
                      No Long-Term Contracts
                    </h4>
                    <p className="text-xs text-body-color sm:text-sm">
                      Month-to-month flexibility with proven results
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30 sm:h-10 sm:w-10">
                    <svg className="h-4 w-4 text-blue-600 dark:text-blue-400 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-black dark:text-white sm:mb-2 sm:text-base">
                      Enterprise Security
                    </h4>
                    <p className="text-xs text-body-color sm:text-sm">
                      Bank-level protection for all your data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;