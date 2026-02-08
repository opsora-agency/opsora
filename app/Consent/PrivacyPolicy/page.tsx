'use client';

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Privacy Policy
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
                        Please read this Privacy Policy carefully before using our services
                      </p>
                    </div>
                    <div className="mb-5">
                      <span className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                        Privacy First
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  {/* Introduction */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      1. Introduction
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      Opsora Agency ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website opsoraagency.com or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>
                  </div>

                  {/* Information We Collect */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      2. Information We Collect
                    </h2>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-black dark:text-white">
                        Personal Information
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                        <li>Fill out contact forms or service booking forms</li>
                        <li>Register for our services</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Contact us via email or phone</li>
                        <li>Participate in surveys or promotions</li>
                      </ul>
                      <p className="text-body-color leading-relaxed mt-4">
                        This information may include:
                      </p>
                      <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                        <li>Name, email address, phone number</li>
                        <li>Company name and job title</li>
                        <li>Business requirements and project details</li>
                        <li>Billing and payment information</li>
                        <li>Any other information you choose to provide</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-black dark:text-white mt-8">
                        Automatically Collected Information
                      </h3>
                      <p className="text-body-color leading-relaxed">
                        When you visit our website, we may automatically collect certain information about your device and browsing actions, including:
                      </p>
                      <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                        <li>IP address and browser type</li>
                        <li>Operating system and device information</li>
                        <li>Pages visited and time spent on pages</li>
                        <li>Referring website addresses</li>
                      </ul>
                    </div>
                  </div>

                  {/* How We Use Your Information */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      3. How We Use Your Information
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      We use the information we collect in the following ways:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                      <li>To provide, operate, and maintain our services</li>
                      <li>To process your service requests and bookings</li>
                      <li>To communicate with you about your projects</li>
                      <li>To send you marketing and promotional communications (with your consent)</li>
                      <li>To improve our website and services</li>
                      <li>To analyze website usage and trends</li>
                      <li>To prevent fraud and enhance security</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                  </div>

                  {/* Cookies and Tracking Technologies */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      4. Cookies and Tracking Technologies
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                    </p>
                    
                      <h3 className="font-semibold text-black dark:text-white mb-2">
                        We use:
                      </h3>
                      <ul className="list-disc pl-6 text-body-color space-y-1 leading-relaxed">
                        <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                        <li><strong>Essential Cookies:</strong> For website functionality</li>
                        <li><strong>Performance Cookies:</strong> To enhance user experience</li>
                      </ul>
                      <p className="text-body-color mt-3 text-sm leading-relaxed">
                        You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                      </p>
                    
                  </div>

                  {/* Data Sharing and Disclosure */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      5. Data Sharing and Disclosure
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      We may share your information in the following situations:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                      <li>
                        <strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf, such as:
                        <ul className="list-circle pl-6 mt-2 space-y-1 leading-relaxed">
                          <li>Analytics providers (Google Analytics)</li>
                          <li>Marketing automation platforms</li>
                          <li>Customer relationship management tools</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or asset sale, your information may be transferred.
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> We may disclose your information where required to do so by law or in response to valid requests by public authorities.
                      </li>
                    </ul>
                  </div>

                  {/* Data Security */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      6. Data Security
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      We implement appropriate technical and organizational security measures designed to protect the security of your personal information. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                    </p>
                  </div>

                  {/* Data Retention */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      7. Data Retention
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies. Typically, we retain client data for 3-6 months after the completion or termination of our service agreement.
                    </p>
                  </div>

                  {/* Your Data Protection Rights */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      8. Your Data Protection Rights
                    </h2>
                    <p className="text-body-color mb-4 leading-relaxed">
                      Under applicable data protection laws, you have certain rights regarding your personal information:
                    </p>
                    <ul className="list-disc pl-6 text-body-color space-y-2 leading-relaxed">
                      <li><strong>Access:</strong> You have the right to request copies of your personal data.</li>
                      <li><strong>Correction:</strong> You have the right to request correction of any inaccurate information.</li>
                      <li><strong>Deletion:</strong> You have the right to request deletion of your personal data.</li>
                      <li><strong>Objection:</strong> You have the right to object to our processing of your personal data.</li>
                      <li><strong>Restriction:</strong> You have the right to request restriction of processing your personal data.</li>
                      <li><strong>Data Portability:</strong> You have the right to request transfer of your data to another organization.</li>
                    </ul>
                    <p className="text-body-color mt-4 leading-relaxed">
                      To exercise any of these rights, please contact us using the information provided below.
                    </p>
                  </div>

                  {/* International Data Transfers */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      9. International Data Transfers
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      Your information, including personal data, is currently processed in India and stored on servers located in India. In the future, we may transfer data to other countries as necessary for our operations. We will ensure that any such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
                    </p>
                  </div>

                  {/* Children's Privacy */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      10. Children's Privacy
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
                    </p>
                  </div>

                  {/* Changes to This Privacy Policy */}
                  <div>
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      11. Changes to This Privacy Policy
                    </h2>
                    <p className="text-body-color leading-relaxed">
                      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We will also notify you via email and/or a prominent notice on our website prior to the change becoming effective. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                  </div>

                  {/* Contact Us */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
                    <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">
                      12. Contact Us
                    </h2>
                    <p className="text-body-color mb-6 leading-relaxed">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
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
                      For data protection inquiries or to exercise your data rights, please email us with "Privacy Request" in the subject line.
                    </p>
                  </div>

                  {/* Consent */}
                  <div className="border-t-2 border-primary pt-8 mt-8">
                    <p className="text-center text-body-color leading-relaxed">
                      By using our website and services, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
                  </div>
                </div>

                {/* Quick Links */}
               {/*} <div className="mt-12 flex flex-wrap justify-center gap-4">
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

export default PrivacyPolicyPage;