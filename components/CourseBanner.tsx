import React from "react";
import CommonButton from "./CommonButton";

interface CourseBannerProps {
  title: any;
  subtitle?: string;
  description: string;
  image: React.ReactNode;
  reverse?: boolean;
  buttonText?: string;
}

const CourseBanner: React.FC<CourseBannerProps> = ({
  title,
  subtitle,
  description,
  image,
  reverse = false,
  buttonText = "Get Started",
}) => {
  return (
    <div className="w-full px-6 py-12">
      <div
        className={`flex flex-col-reverse ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-between gap-10 max-w-screen-xl mx-auto`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-end">{image}</div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl !mb-2 font-semibold text-secondary font-poppins leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground font-poppins leading-7 tracking-tight">
              {subtitle}
            </p>
          )}

          <p className="text-base text-muted-foreground font-poppins leading-snug tracking-tight whitespace-pre-line">
            {description}
          </p>
          <CommonButton variant="secondary">{buttonText}</CommonButton>
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
