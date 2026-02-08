'use client';

const TermsConditionsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Terms and Conditions
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
                        Please read these Terms and Conditions carefully before using our website
                      </p>
                    </div>
                    <div className="mb-5">
                      <span className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                        Website Terms
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  {/* Introduction */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      1. Website Usage Terms
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      Welcome to Opsora Agency. By accessing and using this website (opsoraagency.com), you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
                    </p>
                  </div>

                  {/* Intellectual Property */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      2. Intellectual Property Rights
                    </h2>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        Our Content
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        Unless otherwise stated, Opsora Agency and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from Opsora Agency for your own personal use subjected to restrictions set in these terms and conditions.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-black dark:text-white mt-6">
                        You Must Not:
                      </h3>
                      <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                        <li>Republish material from this website</li>
                        <li>Sell, rent, or sub-license material from this website</li>
                        <li>Reproduce, duplicate, or copy material from this website</li>
                        <li>Redistribute content from Opsora Agency</li>
                        <li>Use this website in any way that is damaging to the website</li>
                      </ul>
                    </div>
                  </div>

                  {/* Acceptable Use */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      3. Acceptable Use
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                      <li>Harassing or causing distress to any other person</li>
                      <li>Transmitting obscene or offensive content</li>
                      <li>Disrupting the normal flow of dialogue within our website</li>
                      <li>Impersonating another person or entity</li>
                      <li>Using the website to send unsolicited commercial communications</li>
                      <li>Attempting to interfere with the website's security features</li>
                    </ul>
                  </div>

                  {/* User Content */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      4. User Content
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      In these Terms and Conditions, "Your Content" shall mean any audio, video, text, images, or other material you choose to display on this website. By displaying Your Content, you grant Opsora Agency a non-exclusive, worldwide, irrevocable, sub-licensable license to use, reproduce, adapt, publish, translate, and distribute it in any and all media.
                    </p>
                    <p className="text-body-color mt-4 leading-relaxed">
                      Your Content must be your own and must not be invading any third-party's rights. Opsora Agency reserves the right to remove any of Your Content from this website at any time without notice.
                    </p>
                  </div>

                  {/* No Warranties */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      5. No Warranties
                    </h2>
                    
                      <p className="text-body-color leading-relaxed">
                        This website is provided "as is," with all faults, and Opsora Agency expresses no representations or warranties of any kind related to this website or the materials contained on this website. Nothing contained on this website shall be interpreted as advising you.
                      </p>
                
                  </div>

                  {/* Limitation of Liability */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      6. Limitation of Liability
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      In no event shall Opsora Agency, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Opsora Agency, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
                    </p>
                  </div>

                  {/* Indemnification */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      7. Indemnification
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      You hereby indemnify to the fullest extent Opsora Agency from and against any and all liabilities, costs, demands, causes of action, damages, and expenses (including reasonable attorney's fees) arising out of or in any way related to your breach of any of the provisions of these Terms.
                    </p>
                  </div>

                  {/* Severability */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      8. Severability
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
                    </p>
                  </div>

                  {/* Variation of Terms */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      9. Variation of Terms
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      Opsora Agency is permitted to revise these Terms at any time as it sees fit, and by using this website you are expected to review these Terms on a regular basis to ensure you understand all terms and conditions governing use of this website.
                    </p>
                  </div>

                  {/* Assignment */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      10. Assignment
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      Opsora Agency shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification or consent required. However, you shall not be permitted to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.
                    </p>
                  </div>

                  {/* Entire Agreement */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      11. Entire Agreement
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      These Terms constitute the entire agreement between Opsora Agency and you in relation to your use of this website and supersede all prior agreements and understandings.
                    </p>
                  </div>

                  {/* Governing Law & Jurisdiction */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      12. Governing Law & Jurisdiction
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the non-exclusive jurisdiction of the courts located in Anand, Gujarat for the resolution of any disputes.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      13. Contact Information
                    </h2>
                    <p className="text-body-color mb-6 leading-relaxed">
                      If you have any questions about these Terms and Conditions, please contact us:
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
                      By using our website, you hereby accept these Terms and Conditions. If you do not agree to any part of these terms, please discontinue use of our website immediately.
                    </p>
                  </div>
                </div>

                {/* Quick Links */}
                {/*<div className="mt-12 flex flex-wrap justify-center gap-4">
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
                    href="/cookie-policy" 
                    className="rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Cookie Policy
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

export default TermsConditionsPage;