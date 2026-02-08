import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Features2 from "@/components/Features2";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";

import AboutService from "@/components/About/AboutService";
import Steps from "@/components/About/Steps";
import TrustedSection from "@/components/About/Trusted";
import Industries from "@/components/About/Industries";
import WhyUs from "@/components/About/WhyUs";
import FAQ from "@/components/About/FAQ";
import ConsentPopup from "@/components/ConsentPopup";
import OneTapeAway from "@/components/About/OneTapeAway";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Brands /> 
      <AboutSectionOne />
      <AboutSectionTwo />
      <Features />
      
      {/*Data/Impact Counter Section */}
      <Features2 /> 
      <AboutService /> 
      <Video />
      <Steps />
      
      {/*<WhyUs />*/}
      <TrustedSection /> 
      <Industries />
      <Testimonials />
      
      <OneTapeAway />
      <FAQ />
      <Contact />
      
      <ConsentPopup />
    </>
  );
}
