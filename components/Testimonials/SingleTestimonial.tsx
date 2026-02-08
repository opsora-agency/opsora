import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow-400">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="group h-full w-full">
      <div
        className="relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-gray-900 sm:p-8"
        data-wow-delay=".1s"
      >
        {/* Quote Icon */}
        <div className="absolute -right-4 -top-4 h-16 w-16 text-blue-100 opacity-50 dark:text-blue-900/20">
          <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>

        {/* Rating */}
        <div className="mb-4 flex items-center space-x-1">{ratingIcons}</div>

        {/* Content */}
        <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          "{content}"
        </p>

        {/* Author */}
        <div className="flex items-center">
          <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full border-2 border-blue-100 dark:border-blue-900/30">
            <Image 
              src={image} 
              alt={name} 
              fill 
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              {designation}
            </p>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-300 group-hover:border-blue-500/10"></div>
      </div>
    </div>
  );
};

export default SingleTestimonial;