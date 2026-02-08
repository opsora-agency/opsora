"use client";

import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              See Us in Action
            </span>
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl">
              See How We Transform
              <span className="block text-blue-600 dark:text-blue-400">Businesses with AI</span>
            </h2>
            <p className="mx-auto text-base text-body-color dark:text-gray-400 sm:text-lg">
              Watch how our AI-powered solutions help businesses automate processes, 
              generate more leads, and achieve sustainable growth in today's digital landscape.
            </p>
          </div>

          {/* Video Container */}
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-lg shadow-2xl transition-all duration-300 hover:shadow-3xl"
                data-wow-delay=".15s"
              >
                <div className="group relative aspect-[77/40] cursor-pointer items-center justify-center" onClick={() => setOpen(true)}>
                  <Image
                    src={getImagePath("/images/video/video.jpg")}
                    alt="AI Automation in Action"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      className="group flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-90 text-primary transition-all duration-300 hover:scale-110 hover:bg-white hover:bg-opacity-100 hover:shadow-2xl"
                    >
                      <svg
                        width="22"
                        height="26"
                        viewBox="0 0 22 26"
                        className="fill-current transition-transform duration-300 group-hover:scale-110"
                      >
                        <path d="M21.5 12.134C22.1667 12.5189 22.1667 13.4811 21.5 13.866L2 23.6603C1.33333 24.0452 0.5 23.564 0.5 22.7942L0.5 3.20577C0.5 2.43597 1.33333 1.95485 2 2.33974L21.5 12.134Z" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="mb-1 text-lg font-bold">AI Automation Demo</h3>
                        <p className="text-sm opacity-90">See real-time AI agents at work • 3:45</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 md:text-3xl">500+</div>
              <div className="mt-1 text-sm font-medium text-body-color">Hours Automated</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 md:text-3xl">94%</div>
              <div className="mt-1 text-sm font-medium text-body-color">Accuracy Rate</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 md:text-3xl">3.2K</div>
              <div className="mt-1 text-sm font-medium text-body-color">Leads Generated</div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4 text-center dark:border-gray-700 dark:bg-gray-800">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 md:text-3xl">24/7</div>
              <div className="mt-1 text-sm font-medium text-body-color">AI Support</div>
            </div>
          </div>
          
          {/* CTA 
          <div className="mt-10 text-center">
            <p className="mb-4 text-base text-body-color dark:text-gray-400">
              Want to see how this works for your business?
            </p>
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch Full Demo
            </button>
          </div>*/}
        </div>

        {/* Original Background */}
        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </section>

      {/* Modal Video with backdrop blur */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="relative w-full max-w-4xl px-4">
            {/* Close button moved down */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-8 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 sm:-top-10"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Video container with rounded corners */}
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <ModalVideo
                channel="youtube"
                autoplay={true}
                start={true}
                isOpen={isOpen}
                videoId="L61p2uyiMSo"
                onClose={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Modal styles for react-modal-video */}
      <style jsx global>{`
        .modal-video-close-btn {
          display: none !important;
        }
        .modal-video {
          background-color: transparent !important;
        }
        .modal-video-movie-wrap {
          border-radius: 12px !important;
          overflow: hidden !important;
        }
        .modal-video-close-btn:before, 
        .modal-video-close-btn:after {
          display: none !important;
        }
      `}</style>
    </>
  );
};

export default Video;