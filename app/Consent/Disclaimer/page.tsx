'use client';

const DisclaimerPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Disclaimer
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
                        Important legal disclaimers regarding our website and services
                      </p>
                    </div>
                    <div className="mb-5">
                      <span className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                        Legal Notice
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  {/* General Disclaimer */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      1. General Disclaimer
                    </h2>
                    
                      <p className="text-body-color leading-relaxed">
                        The information contained on the Opsora Agency website (opsoraagency.com) is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
                      </p>
                    
                    <p className="text-body-color leading-relaxed mt-4">
                      Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                    </p>
                  </div>

                  {/* No Professional Advice */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      2. No Professional Advice
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      The information provided on this website does not, and is not intended to, constitute legal, financial, tax, or professional advice. All information, content, and materials available on this site are for general informational purposes only. Information on this website may not constitute the most up-to-date legal or other information.
                    </p>
                    <p className="text-body-color leading-relaxed mt-4">
                      You should contact your attorney, financial advisor, or other relevant professional to obtain advice with respect to any particular matter. No reader, user, or browser of this site should act or refrain from acting on the basis of information on this site without first seeking professional advice.
                    </p>
                  </div>

                  {/* External Links Disclaimer */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      3. External Links Disclaimer
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with Opsora Agency. Please note that Opsora Agency does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                    </p>
                    
                      <p className="text-body-color leading-relaxed">
                        <strong>Important:</strong> We do not control and are not responsible for the content of any linked site or any link contained in a linked site. The inclusion of any link does not imply endorsement by Opsora Agency of the site. Use of any such linked website is at the user's own risk.
                      </p>
                   
                  </div>

                  {/* Testimonials Disclaimer */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      4. Testimonials Disclaimer
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      The site may contain testimonials by users of our services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our services. We do not claim, and you should not assume, that all users will have the same experiences.
                    </p>
                    <p className="text-body-color leading-relaxed mt-4">
                      Your individual results may vary. The testimonials on the site are submitted in various forms such as text, audio, and/or video, and are reviewed by us before being posted. They appear on the site verbatim as given by the users, except for the correction of grammar or typing errors.
                    </p>
                  </div>

                  {/* No Guarantee of Results */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      5. No Guarantee of Results
                    </h2>
                    
                      <p className="text-body-color leading-relaxed">
                        <strong>Important Notice:</strong> Opsora Agency provides automation and digital services. We do not guarantee any specific results, revenue, leads, or business outcomes from our services. Past performance does not guarantee future results.
                      </p>
                   
                    <p className="text-body-color leading-relaxed">
                      The success of any digital marketing campaign, automation system, or website depends on numerous factors including market conditions, client implementation, industry trends, and other variables beyond our control. Any examples, case studies, or references to past results are for illustrative purposes only and should not be interpreted as a promise or guarantee of similar outcomes.
                    </p>
                  </div>

                  {/* Fair Use Disclaimer */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      6. Fair Use Disclaimer
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      This website may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of automation, digital marketing, and business topics.
                    </p>
                    <p className="text-body-color leading-relaxed mt-4">
                      We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law. If you wish to use copyrighted material from this site for purposes of your own that go beyond fair use, you must obtain permission from the copyright owner.
                    </p>
                  </div>

                  {/* Views Expressed Disclaimer */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      7. Views Expressed Disclaimer
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      The views and opinions expressed on this website are those of the authors and do not necessarily reflect the official policy or position of any other agency, organization, employer, or company, including Opsora Agency. Comments published by users are their sole responsibility and the users will take full responsibility, liability, and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment.
                    </p>
                  </div>

                  {/* Errors and Omissions */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      8. Errors and Omissions Disclaimer
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Opsora Agency is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      9. Contact Information
                    </h2>
                    <p className="text-body-color mb-6 leading-relaxed">
                      If you have any questions about this Disclaimer, please contact us:
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
                  </div>

                  {/* Acceptance */}
                  <div className="border-t-2 border-primary pt-8 mt-8">
                    <p className="text-center text-body-color font-medium leading-relaxed">
                      By using our website, you acknowledge that you have read and understood this Disclaimer. If you do not agree with any part of this disclaimer, please discontinue use of our website and services immediately.
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
                    href="/terms-conditions" 
                    className="rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Terms & Conditions
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

export default DisclaimerPage;