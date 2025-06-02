import React from "react";
import CommonButton from "./CommonButton";

interface CourseBannerProps {
  title: string;
  subtitle: string;
  description: string;
  image: React.ReactNode;
  reverse?: boolean;
}

const CourseBanner: React.FC<CourseBannerProps> = ({
  title,
  subtitle,
  description,
  image,
  reverse = false,
}) => {
  return (
    <div className="w-full px-6 py-12">
      <div
        className={`flex flex-col-reverse ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-between gap-10 max-w-screen-xl mx-auto`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">{image}</div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold text-zinc-500 font-poppins leading-tight">
            {title}
          </h2>
          <p className="text-xl text-neutral-500 font-poppins leading-7 tracking-tight">
            {subtitle}
          </p>
          <p className="text-base text-neutral-500 font-poppins leading-snug tracking-tight whitespace-pre-line">
            {description}
          </p>
          <CommonButton variant="secondary">Get Started</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;