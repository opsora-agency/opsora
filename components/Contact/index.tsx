'use client';

import { useState, FormEvent } from 'react';
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Contact details
  const contactInfo = {
    email: 'opsoraagency@gmail.com',
    phone: '+91 8401765505'
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission - UPDATED VERSION
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Generate a unique Ticket ID
    const ticketId = 'CT-' + Math.floor(100000 + Math.random() * 900000);

    try {
      // Prepare the email payload
      const emailPayload = {
        to: 'opsoraagency@gmail.com',
        subject: `[${ticketId}] Support Ticket from ${formData.name}`,
        html: `
          <h2>New Support Ticket</h2>
          <h3>Ticket ID: ${ticketId}</h3>
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          
          <h3>Message</h3>
          <p>${formData.message}</p>
          
          <hr>
          <p><em>This message was sent from the Opsora Agency contact form.</em></p>
        `,
      };

      // Prepare the storage payload for Google Sheets
      const storagePayload = {
        ticketId: ticketId,
        customerName: formData.name,
        customerEmail: formData.email,
        messageContent: formData.message,
        inquirySubject: 'Support Ticket',
        formType: 'Ticket' // Helps you identify source in the same sheet
      };

      // Run both operations in parallel
      const [emailRes, storageRes] = await Promise.allSettled([
        // 1. Send email (keep existing functionality)
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(emailPayload),
        }),
        // 2. Save to Google Sheets (NEW functionality)
        fetch('/api/store-contact', { // UPDATED PATH
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(storagePayload),
        })
      ]);

      // Handle results
      let successMessage = '';
      let errorMessage = '';
      
      // Check email response
      if (emailRes.status === 'fulfilled' && emailRes.value.ok) {
        successMessage = '✅ Email sent successfully.';
      } else {
        errorMessage = '❌ Email failed. ';
      }
      
      // Check storage response
      if (storageRes.status === 'fulfilled' && storageRes.value.ok) {
        successMessage += ' Data saved successfully.';
      } else {
        errorMessage += 'Data storage failed. ';
        // Silently fail storage - don't show error to user
        console.log('Storage failed (non-critical):', storageRes.reason);
      }
      
      // Set final message
      if (successMessage.includes('✅')) {
        setSubmitMessage(`Thank you! Your ticket has been submitted. Ticket ID: ${ticketId}. We will get back to you via email ASAP.`);
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitMessage(`${errorMessage}Please try again or contact us directly at opsoraagency@gmail.com`);
      }
      
    } catch (error) {
      console.error('Network error:', error);
      setSubmitMessage('Network error. Please try again or contact us directly at opsoraagency@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Schedule Consultation
              </h2>
              <p className="mb-8 text-base font-medium text-body-color">
                Schedule a strategy session and receive a customized growth plan.
              </p>
              
              {/* Minimal Contact Information */}
              <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                <div className="flex items-center">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                    <svg className="h-4 w-4 text-body-color dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <a 
                      href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                      className="text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
                    <svg className="h-4 w-4 text-body-color dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-base font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        required
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">


                    {/* Success/Error Message */}
              {submitMessage && (
                <div className={`mb-6 rounded-md p-4 ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'}`}>
                  {submitMessage}
                </div>
              )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 disabled:opacity-70"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;