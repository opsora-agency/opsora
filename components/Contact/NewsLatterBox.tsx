"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // NewsLatterBox.tsx updates
const handleNewsletterSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!newsletterEmail.trim() || !newsletterEmail.includes("@")) return;

  setIsSubmitting(true);
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: newsletterEmail, name: name })
    });
    
    const data = await response.json();
    
    if (response.ok && data.success) {
      setIsSubmitted(true);
      setNewsletterEmail("");
      setName("");
      // Keep message visible for 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      alert(data.error || "Subscription failed. Please try again.");
    }
  } catch (error) {
    console.error("Frontend Error:", error);
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div
      className="wow fadeInUp shadow-three dark:bg-gray-dark relative z-10 rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe to receive future updates
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Join our newsletter to get the latest updates, no spam, unsubscribe anytime.
      </p>
      
      <form onSubmit={handleNewsletterSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
          className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          required
          disabled={isSubmitting}
        />
        
        {isSubmitted && (
          <div className="mb-4 rounded-lg bg-green-100 px-4 py-3 dark:bg-green-900/20">
            <p className="text-sm text-green-600 dark:text-green-400 flex items-center">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thank you! You're now subscribed to our newsletter.
            </p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting || !newsletterEmail.trim()}
          className="shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2"></div>
              Subscribing...
            </div>
          ) : (
            "Subscribe"
          )}
        </button>
        
        <p className="dark:text-body-color-dark text-center text-base leading-relaxed text-body-color">
          <span className="font-medium text-green-600 dark:text-green-400">No spam guaranteed.</span>
        </p>
      </form>

      {/* ... rest of the decorative SVG elements remain the same ... */}
      <div>
        <span className="absolute left-2 top-7">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#paint0_linear_1028_600)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1028_600"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0.62"
                />
                <stop
                  offset="1"
                  stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
        </span>

        <span className="absolute bottom-24 left-1.5">
          <svg
            width="39"
            height="32"
            viewBox="0 0 39 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ... SVG paths ... */}
          </svg>
        </span>

        <span className="absolute right-2 top-[140px]">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ... SVG paths ... */}
          </svg>
        </span>

        <span className="absolute right-0 top-0">
          <svg
            width="162"
            height="91"
            viewBox="0 0 162 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* ... SVG paths ... */}
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;