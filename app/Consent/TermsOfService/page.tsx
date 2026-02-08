'use client';

const TermsOfServicePage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Terms of Service
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
                        Please read these Terms of Service carefully before using our services
                      </p>
                    </div>
                    <div className="mb-5">
                      <span className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                        Legal Terms
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  {/* Acceptance of Terms */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      By accessing and using the Opsora Agency website (opsoraagency.com) and our services, you accept and agree to be bound by the terms and provisions of this agreement. In addition, when using our services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in our services will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use our services.
                    </p>
                  </div>

                  {/* Services Description */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      2. Services Description
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      Opsora Agency provides automation and digital solutions services, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                      <li>Digital Marketing Services (SEO, PPC, Social Media, Content Marketing)</li>
                      <li>Automation Services (AI Workflows, Chatbots, AI Agents)</li>
                      <li>Website Development Services</li>
                      <li>Business Process Automation</li>
                      <li>System Integration Services</li>
                      <li>Consulting and Advisory Services</li>
                    </ul>
                    <p className="text-body-color mt-4 leading-relaxed">
                      All services are provided on a project basis with specific scope defined in individual service agreements.
                    </p>
                  </div>

                  {/* User Responsibilities */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      3. User Responsibilities
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      As a user of our services, you agree to:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                      <li>Provide accurate, current, and complete information during registration and service booking</li>
                      <li>Maintain the confidentiality of your account credentials</li>
                      <li>Notify us immediately of any unauthorized use of your account</li>
                      <li>Use our services only for lawful purposes</li>
                      <li>Not interfere with or disrupt the security or functionality of our services</li>
                      <li>Not attempt to gain unauthorized access to our systems or data</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>

                  {/* Service Agreement */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      4. Service Agreement
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      All professional services provided by Opsora Agency are governed by a separate Service Agreement that will be provided before commencement of work. The Service Agreement includes:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                      <li>Detailed scope of work and deliverables</li>
                      <li>Payment terms and schedule</li>
                      <li>Project timeline and milestones</li>
                      <li>Intellectual property rights</li>
                      <li>Confidentiality obligations</li>
                      <li>Termination conditions</li>
                      <li>Limitation of liability</li>
                    </ul>
                    <p className="text-body-color mt-4 leading-relaxed">
                      The Service Agreement supersedes these Terms of Service for specific projects.
                    </p>
                  </div>

                  {/* Payment Terms */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      5. Payment Terms
                    </h2>
                    <div className="space-y-4">
                      <p className="text-body-color leading-relaxed">
                        All payments for services are due as specified in the individual Service Agreement. Our standard payment terms include:
                      </p>
                      
                     
                        <h3 className="font-semibold text-black dark:text-white mb-3">
                          Standard Payment Structure:
                        </h3>
                        <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                          <li><strong>Setup Fee:</strong> 100% upfront payment required before work commencement</li>
                          <li><strong>Subscription Services:</strong> Monthly/Annual fees paid in advance</li>
                          <li><strong>Additional Work:</strong> Quoted separately and approved before execution</li>
                          <li><strong>Payment Methods:</strong> Bank transfer, UPI, or other agreed-upon methods</li>
                        </ul>
                      </div>
                      
                      <p className="text-body-color leading-relaxed">
                        Failure to make timely payments may result in suspension of services. All prices are in Indian Rupees (INR) unless otherwise specified.
                      </p>
                    
                  </div>

                  {/* Intellectual Property */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      6. Intellectual Property
                    </h2>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        Our Intellectual Property
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        All proprietary automation logic, AI prompt engineering, custom code, workflows, system designs, methodologies, and know-how developed by Opsora Labs remain the exclusive intellectual property of Opsora Agency. The Client is granted a limited, non-transferable license to use these systems only during the active engagement period.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-black dark:text-white mt-6">
                        Client Intellectual Property
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        All Client-specific business data, including customer leads, chat history, uploaded proprietary business documents, brand assets, and business processes remain the exclusive property of the Client.
                      </p>
                      
                      <h3 className="text-lg font-semibold text-black dark:text-white mt-6">
                        Third-Party Intellectual Property
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        We respect the intellectual property rights of others. If you believe your work has been copied in a way that constitutes copyright infringement, please contact us at opsora.services@gmail.com.
                      </p>
                    </div>
                  </div>

                  {/* Confidentiality */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      7. Confidentiality
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      Both parties agree to keep confidential all proprietary, technical, and business information shared during the engagement. This obligation includes:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                      <li>Business strategies and financial information</li>
                      <li>Technical data and system designs</li>
                      <li>Customer lists and marketing plans</li>
                      <li>Any proprietary information related to operations</li>
                    </ul>
                    <p className="text-body-color mt-4 leading-relaxed">
                      Confidential information shall not be disclosed except as required for service delivery or by law. This obligation survives termination of our agreement.
                    </p>
                  </div>

                  {/* Disclaimer of Warranties */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      8. Disclaimer of Warranties
                    </h2>
                    
                      <p className="text-body-color leading-relaxed">
                        <strong>Important:</strong> Opsora Agency provides technical systems and automation services only. All services are provided "AS IS" and "AS AVAILABLE" without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
                      </p>
                      <p className="text-body-color mt-2 leading-relaxed">
                        We do not guarantee specific business results, revenue outcomes, or performance metrics. Results may vary based on market conditions, client implementation, and other factors beyond our control.
                      </p>
                    
                  </div>

                  {/* Limitation of Liability */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      9. Limitation of Liability
                    </h2>
                    
                      <p className="text-body-color leading-relaxed">
                        To the maximum extent permitted by applicable law, Opsora Agency shall not be liable for:
                      </p>
                      <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed mt-2">
                        <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                        <li>Loss of profits, revenue, data, or business opportunities</li>
                        <li>Costs of substitute goods or services</li>
                        <li>Business interruption or system failures</li>
                      </ul>
                      <p className="text-body-color mt-3 leading-relaxed">
                        Our total liability, if any, shall not exceed the total amount paid by you to Opsora Agency for the specific service giving rise to the claim in the six (6) months preceding the claim.
                      </p>
                    
                  </div>

                  {/* Termination */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      10. Termination
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p className="text-body-color leading-relaxed">
                      Upon termination, your right to use our services will cease immediately. If you wish to terminate your agreement, you may simply discontinue using our services. Provisions of these Terms which by their nature should survive termination shall survive termination, including without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                    </p>
                  </div>

                  {/* Changes to Terms */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      11. Changes to Terms
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
                    </p>
                  </div>

                  {/* Governing Law */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      12. Governing Law
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts located in Anand, Gujarat, India.
                    </p>
                  </div>

                  {/* Dispute Resolution */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      13. Dispute Resolution
                    </h2>
                   
                      <p className="text-body-color leading-relaxed">
                        In the event of any dispute arising out of or relating to these Terms or our services:
                      </p>
                      <ol className="list-decimal pl-6 text-body-color space-y-2 leading-relaxed mt-2">
                        <li><strong>Negotiation:</strong> Parties shall first attempt to resolve the dispute through good-faith negotiations</li>
                        <li><strong>Mediation:</strong> If negotiation fails, parties may attempt mediation through a mutually agreed mediator</li>
                        <li><strong>Arbitration:</strong> Unresolved disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996</li>
                        <li><strong>Court Proceedings:</strong> If arbitration fails, disputes shall be subject to the exclusive jurisdiction of courts in Anand, Gujarat</li>
                      </ol>
                    
                  </div>

                  {/* Contact Information */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      14. Contact Information
                    </h2>
                    <p className="text-body-color mb-6 leading-relaxed">
                      For any questions about these Terms of Service, please contact us:
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
                      By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms, together with our Privacy Policy and Service Agreement, constitute the entire agreement between you and Opsora Agency regarding our services.
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
                    href="/service-agreement" 
                    className="rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    Service Agreement
                  </a>
                  <a 
                    href="/nda" 
                    className="rounded-md border border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    NDA Agreement
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

export default TermsOfServicePage;