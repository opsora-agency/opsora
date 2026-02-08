import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 w-full h-full min-h-[320px] flex flex-col">
      {/* Icon Container with Gradient Background */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800/40 dark:group-hover:to-blue-700/30 transition-all duration-300">
        <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white lg:text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      
      {/* Paragraph */}
      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
        {paragraph}
      </p>
      
      {/* Subtle Border Animation on Hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/10 transition-all duration-300 pointer-events-none"></div>
      
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 h-12 w-12 rounded-tr-2xl rounded-bl-2xl bg-gradient-to-br from-blue-500/5 to-transparent"></div>
    </div>
  );
};

export default SingleFeature;