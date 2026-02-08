'use client';

const CookiePolicyPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Cookie Policy
                </h1>
                
                <div className="mb-10 border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="mb-5">
                      <span className="mb-1 text-base font-medium text-body-color">
                        Last Updated: {new Date().toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <p className="text-sm text-body-color opacity-80">
                        Learn how we use cookies and similar technologies on our website
                      </p>
                    </div>
                    <div className="mb-5">
                      <span className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                        Cookie Settings
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  {/* Introduction */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      1. What Are Cookies?
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      Cookies are small text files that are placed on your computer, smartphone, or other device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies help us recognize your device and remember information about your visit, such as your preferences and settings.
                    </p>
                  </div>

                  {/* How We Use Cookies */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      2. How We Use Cookies
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      Opsora Agency uses cookies and similar tracking technologies for the following purposes:
                    </p>
                    
                    <div className="border-l-4 border-primary pl-4 py-2 my-4">
                      <h3 className="font-semibold text-black dark:text-white mb-3">
                        Essential Cookies
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 py-2 my-4">
                      <h3 className="font-semibold text-black dark:text-white mb-3">
                        Performance Cookies
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve how our website works.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 py-2 my-4">
                      <h3 className="font-semibold text-black dark:text-white mb-3">
                        Functional Cookies
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                      </p>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4 py-2 my-4">
                      <h3 className="font-semibold text-black dark:text-white mb-3">
                        Analytics Cookies
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.
                      </p>
                    </div>
                  </div>

                  {/* Third-Party Cookies */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      3. Third-Party Cookies
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service, deliver advertisements on and through the service, and so on. These include:
                    </p>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                          Google Analytics
                        </h3>
                        <p className="text-body-color leading-relaxed">
                          We use Google Analytics to collect information about how visitors use our website. Google Analytics uses cookies to collect standard internet log information and visitor behavior information in an anonymous form.
                        </p>
                        <p className="text-body-color mt-2 text-sm leading-relaxed">
                          For more information about Google Analytics cookies, please see Google's official page: 
                          <a href="https://policies.google.com/technologies/cookies" className="text-primary ml-1 hover:underline">
                            Google Analytics Cookie Usage
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cookie Duration */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      4. Cookie Duration
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      Cookies can remain on your device for different periods of time:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed mt-2">
                      <li>
                        <strong>Session Cookies:</strong> These are temporary cookies that expire and are automatically deleted when you close your browser.
                      </li>
                      <li>
                        <strong>Persistent Cookies:</strong> These remain on your device for a set period of time or until you delete them. We use persistent cookies to remember your preferences and settings.
                      </li>
                    </ul>
                  </div>

                  {/* Managing Cookies */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      5. Managing Your Cookie Preferences
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
                    </p>
                    
                    
                      <h3 className="font-semibold text-black dark:text-white mb-3">
                        Browser Settings
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect the functionality of our website.
                      </p>
                      <ul className="list-disc pl-6 text-body-color space-y-1 leading-relaxed mt-2">
                        <li>
                          <strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data
                        </li>
                        <li>
                          <strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                        </li>
                        <li>
                          <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
                        </li>
                        <li>
                          <strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and data stored
                        </li>
                      </ul>
                    

                    
                      <h3 className="font-semibold text-black dark:text-white mb-3">
                        Opt-Out Tools
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        You can opt-out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on:
                        <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary ml-1 hover:underline">
                          Google Analytics Opt-out
                        </a>
                      </p>
                    
                  </div>

                  {/* Your Rights */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      6. Your Rights
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      Under data protection laws, you have rights in relation to your personal data collected through cookies:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                      <li><strong>Right to Access:</strong> You have the right to know what personal data we collect about you through cookies</li>
                      <li><strong>Right to Control:</strong> You have the right to accept or reject different types of cookies</li>
                      <li><strong>Right to Delete:</strong> You can delete cookies from your device at any time</li>
                      <li><strong>Right to Object:</strong> You can object to the processing of your personal data through cookies</li>
                      <li><strong>Right to Withdraw Consent:</strong> You can withdraw your cookie consent at any time</li>
                    </ul>
                  </div>

                  {/* Updates to Cookie Policy */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      7. Updates to This Cookie Policy
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last Updated" date. We encourage you to review this Cookie Policy periodically for any changes.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      8. Contact Information
                    </h2>
                    <p className="text-body-color mb-6 leading-relaxed">
                      If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        <span className="text-body-color">Email: opsora.services@gmail.com</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="text-body-color">Phone: +91 8401765505</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-body-color">Location: Borsad, Anand, Gujarat, India</span>
                      </div>
                    </div>
                    <p className="text-body-color mt-4 text-sm opacity-80 leading-relaxed">
                      For cookie-related inquiries, please include "Cookie Policy" in the subject line of your email.
                    </p>
                  </div>

                  {/* Consent */}
                  <div className="border-t-2 border-primary pt-8 mt-8">
                    <p className="text-center text-body-color leading-relaxed">
                      By continuing to use our website without changing your cookie settings, you consent to our use of cookies as described in this Cookie Policy.
                    </p>
                  </div>
                </div>

                {/* Quick Links */}
               {/* <div className="mt-12 flex flex-wrap justify-center gap-4">
                  <a 
                    href="/privacy-policy" 
                    className="rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a 
                    href="/terms-of-service" 
                    className="rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a 
                    href="/service-agreement" 
                    className="rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Service Agreement
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicyPage;