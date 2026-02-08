import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="relative py-20 md:py-28 lg:py-36 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={
              <>
                Our<span className="text-primary"> Features</span>
              </>
            }
            paragraph="Designed to deliver exceptional results and elevate your business to the next level."
            center
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {featuresData.map((feature) => (
              <div key={feature.id} className="flex">
                <SingleFeature feature={feature} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-10 dark:opacity-5">
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>
      </section>
    </>
  );
};

export default Features;