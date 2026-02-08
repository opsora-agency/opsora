import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule Consultation",
  description: "Let's discuss how we can accelerate your business growth together.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Schedule Consultation"
        description="Let's discuss how we can accelerate your business growth together."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
